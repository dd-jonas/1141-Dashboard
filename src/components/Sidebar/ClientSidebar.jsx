import useData from "../../core/hooks/useData";
import { ClientItem } from "./ClientItem";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";

export const ClientSidebar = () => {
  const { data } = useData();
  return (
    <div className="client__container">
      <SidebarHeader />
      {data.map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
      <SidebarFooter />
    </div>
  );
};
