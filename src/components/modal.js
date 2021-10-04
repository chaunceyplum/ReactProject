import React, {useState} from 'react';
import {Button, ModalHeader, ModalBody, Modal, ModalFooter} from 'reactstrap';

const ModalComponent = (props) => {

    
    
    const [show,setShow] = useState(false)

    const toggleModal = () => setShow(!show)
    
    
    
    return (
        <div>
            <Button onClick={toggleModal}>
                Login
            </Button>
            <Modal
            isOpen={show}
           toggle={toggleModal}
            >
                <ModalHeader>
                    <strong>
                        Register
                    </strong>
                </ModalHeader>
                <ModalBody>
                    
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal}>
                        Cancel
                    </Button>
                    <Button onClick={toggleModal}>
                        login
                    </Button>

                </ModalFooter>

            </Modal>
        </div>
    )
}

export default ModalComponent
