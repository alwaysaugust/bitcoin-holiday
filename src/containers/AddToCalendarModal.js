// /* eslint-disable react/no-array-index-key */
// import React, { useState, useEffect } from 'react';
// import * as Add2Calendar from 'add2calendar';
// import { Input, Modal, ModalBody } from 'reactstrap';
// import CloseIcon from '../components/svg/CloseIcon';
// import {
//   initClient,
//   signInToGoogle,
//   publishTheCalenderEvent,
//   checkSignInStatus,
// } from '../../helpers/GoogleAPIService';

// const AddToCalendarModal = ({ addToCalendarModal, setAddToCalendarModal }) => {
//   const shareUrl = window.location.href;
//   const [selectedMonth, setSelectedMonth] = useState(0);
//   const [multiEvents, setMultiEvents] = useState([]);
//   useEffect(() => {
//     setSelectedMonth(months[toolbar.date.getMonth()].value);
//     setMultiEvents(toolbar.all);
//   }, [toolbar]);
//   const getAuthToGoogle = async () => {
//     const successfull = await signInToGoogle();
//     if (successfull) {
//       publishTheCalenderEvent(multiEvents);
//     }
//   };
//   const addToGoogle = () => {
//     initClient(async (success) => {
//       if (success) {
//         const status = await checkSignInStatus();
//         if (status) {
//           publishTheCalenderEvent(multiEvents);
//         } else {
//           getAuthToGoogle();
//         }
//       } else {
//         getAuthToGoogle();
//       }
//     });
//   };

//   return (
//     <Modal
//       className="share-modal"
//       isOpen={addToCalendarModal}
//       toggle={() => setAddToCalendarModal(!addToCalendarModal)}
//     >
//       <div className="share-header">
//         <button
//           type="button"
//           className="btn btn-empty p-0"
//           onClick={() => setAddToCalendarModal(!addToCalendarModal)}
//         >
//           <span className="theme-svg">
//             <CloseIcon />
//           </span>
//         </button>
//       </div>
//       <ModalBody>
//         <div className="share-title">Share with friends</div>
//         <div>
//           <button
//             type="button"
//             className="btn btn-add-to-google"
//             onClick={addToGoogle}
//           >
//             Add to Google Calendar
//           </button>
//           <a
//             href={new Add2Calendar(multiEvents).getOutlookUrl()}
//             download="download-outlook"
//             className="btn add-to-calendar-item"
//           >
//             Add to Outlook
//           </a>
//           <a
//             href={new Add2Calendar(multiEvents).getICalUrl()}
//             download="download-icalendar"
//             className="btn add-to-calendar-item"
//           >
//             Add to iCalendar
//           </a>
//         </div>
//       </ModalBody>
//     </Modal>
//   );
// };

// export default AddToCalendarModal;
