import { DefaultActions } from "../../components/Detail/DefaultActions";
import { DetailHeader } from "../../components/Detail/DetailHeader";
import { StateButton } from "../../components/Detail/StateButton";

export const ClientDetail = ({ data }) => {
  return (
    <>
      <DetailHeader data={data} />
      <hr />
      <div className="detail__actions">
        {/* Component containing the three defaultstates buttons: inactive, active and solved */}
        <DefaultActions client={data} />

        {/* If client has extra states => create a button for every state */}
        {data.extraStates &&
          data.extraStates.map((item, index) => (
            <StateButton stateData={item} clientData={data} key={index} />
          ))}
      </div>
    </>
  );
};
