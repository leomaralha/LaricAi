import React from "react";
import useStyles from "./style";
import SideMenu from "../../components/SideMenu";
import ClientAddressForms from "../../components/Forms/ClientAddressForms/index";

function ClientAddressForm() {
  const [searchText, setSearchText] = React.useState("");

  const classes = useStyles();
  return (
    <>
      <SideMenu
        onSearchFieldChange={setSearchText}
        searchFieldValue={searchText}
      />
      <ClientAddressForms 
      />
    </>
  );
}

export default ClientAddressForm;

