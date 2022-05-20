import React from "react";
//import { ArrowRightOutlined, PropertySafetyFilled } from "@ant-design/icons";
//import { ReactComponent as Metamask } from "../images/metamask.svg";
//import CustomButton from "../components/atoms/CustomButton/CustomButton";
import MetamaskConnectButton from "../components/molecules/MetamaskConnectButton/MetamaskConnectButton";
import CoinCard from "../components/molecules/CoinCard/CoinCard";

import "./_protocol.scss";
import ReservesCard from "../components/molecules/ReservesCard/ReservesCard";

export default function Protocol({ data, accounts, connectFxn }) {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="ProtocolSection">
        <div className="Left">
          <h1>
            <strong>Protocol Name</strong> presentation goes here
          </h1>
          <div className="DescriptionContainer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
            <MetamaskConnectButton accounts={accounts} connectFxn={connectFxn} />

            {/*<CustomButton
              type="primary"
              htmlType="submit"
              text="Connect with Metamask"
              theme="primary"
              iconWallet={<Metamask />}
              icon={<ArrowRightOutlined />}
            />*/}
        </div>
        <div className="Right">
          <h2 className="SubtTitle">
            <strong>Protocol Coins</strong> Detail
          </h2>
          <div className="CoinsContainer">
            <CoinCard
              coinIcon="/coin-icon-one.png"
              coinName="Stablecoin Name"
              priceAmount={data.scaledPriceSc} //"0.31152640"
              circulatingAmount={data.scaledNumberSc} //"1,345,402.15"
            />
            <CoinCard
              coinIcon="/coin-icon-two.png"
              coinName="Reservecoin Name"
              priceAmount={data.scaledPriceRc} //"0.31152640"
              circulatingAmount={data.scaledNumberRc} //"1,345,402.15"
            />
            <ReservesCard
              priceAmount={data.scaledReserveBc}
              equivalence="≈ 4.51M StabeCoin"
              coinIcon="/coin-icon-three.png"
              coinName="Reserves"
              reserveRatio={data.percentReserveRatio}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
