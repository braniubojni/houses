import { FC } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ActionDialogProp = {
	title?: string,
	msg?: string,
	yesText?: string,
	noText?: string,
};

const ActionDialog: FC<ActionDialogProp> = ({
	msg = 'Are you sure you want to do it?',
	noText = 'NO',
	title = 'Action needed',
	yesText = 'YES'
}) => {
	return (
		<div
			className="modal show"
			style={{ display: 'block', position: 'initial' }}
		>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>{msg}</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary">{yesText}</Button>
					<Button variant="primary">{noText}</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
}

export default ActionDialog;