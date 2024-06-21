import "./App.css";
// import * as THREE from "three";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transaparent;
  color: black;
  z-index: 99999999999999999999999999999999999999px;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <>
      <StyledApp>
        <AppContainer>
          <FlexBoxCol>
            <FlexBoxRow>
              <TonConnectButton
                style={{ zIndex: "999999999999999999999999999999999999px" }}
              />
              <Button>
                {network
                  ? network === CHAIN.MAINNET
                    ? "Mainnet"
                    : "Testnet"
                  : "N/A"}
              </Button>
            </FlexBoxRow>
          </FlexBoxCol>
        </AppContainer>
      </StyledApp>

      <div></div>
    </>
  );
}

export default App;
