import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function EnquiryModal(props) {

    const [email, setEmail] = useState('');
    const { showModal, toggleModal } = props;

    const EnquiryTitle = "Don't Miss to Claim Your Free Quotation!";

    function onCloseModal() {
        toggleModal(); // Call the toggleModal function to close the modal
        setEmail('');
    }  

    const inputTheme = {
        input: {
         colors: {
          gray: "focus:brand focus:ring-your-color"
                 
         }
        }
    }

    return (
        <>
            <Modal show={showModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{EnquiryTitle}</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="mobile" value="Your Mobile Number" />
                            </div>
                            <TextInput
                                id="mobile"
                                placeholder='9751665327'
                                type="number"
                                required
                            />
                        </div>
                        <div className="w-full items-center flex">
                            <button
                                className='bg-brandPrimary text-white text-sm px-4 py-2 transition-all duration-300 rounded-md hover:bg-neutralDGrey'
                            >Get Callback From Us
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EnquiryModal;
