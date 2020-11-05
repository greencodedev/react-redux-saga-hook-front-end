import React from "react";
import { Modal, ModalHeader, ModalBody, Table } from "reactstrap";

const GetNewModal = (props) => {
  const { isOpen = false, toggle = () => {} } = props;

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered className="to-up">
      <ModalHeader toggle={toggle}>Get New Code</ModalHeader>
      <ModalBody>
        <Table responsive>
          <thead>
            <tr>
              <th className="text-nowrap border-top-0">Title 1</th>
              <th className="text-nowrap border-top-0">Title 2</th>
            </tr>
          </thead>
          <tbody>
            {[{}, {}, {}].map((data, index) => (
              <tr key={index}>
                <td>Value 1</td>
                <td>Value 2</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
    </Modal>
  );
};

export default GetNewModal;
