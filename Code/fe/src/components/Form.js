import React, { useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const schoolOptions = [
	{
		key: "uit",
		text: "University of Information Technology VNU-HCM",
		value: "University of Information Technology",
	},
	{
		key: "ueh",
		text: "University of Economics Ho Chi Minh City",
		value: "University of Economics Ho Chi Minh City",
	},
	{
		key: "iu",
		text: "International University - VNU-HCM",
		value: "International University - VNU-HCM",
	},
];

function FormExampleFieldControlId({ events, close }) {
	//state config
	const [dob, setDOB] = useState(new Date());
	const [fullname, setFullname] = useState();
	const [school, setSchool] = useState();

	return (
		<Form>
			<Form.Group widths="equal">
				<Form.Field
					id="form-input-control-last-name"
					control={Input}
					label="Full Name"
					placeholder="Enter full name"
					value={fullname}
					onChange={(e, { value }) => {
						setFullname(value);
					}}
				/>
				<Form.Select
					fluid
					label="School"
					placeholder="School"
					options={schoolOptions}
					onChange={(e, { value }) => setSchool(value)}
					required={true}
					value={school}
				/>
			</Form.Group>
			<Calendar onChange={setDOB} value={dob} />
			<Form.Field
				id="form-button-control-public"
				control={Button}
				content="Confirm"
				style={{ marginTop: "1em" }}
				onClick={() => {
					if (!fullname || !dob || !school) {
						alert("Please fill empty value");
						return;
					}

					events({
						dob: new Date(dob),
						name: fullname,
						school,
					});
				}}
			/>
		</Form>
	);
}

export default FormExampleFieldControlId;
