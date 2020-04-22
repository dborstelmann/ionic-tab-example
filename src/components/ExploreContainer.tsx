import "./ExploreContainer.css";

import { IonButton } from "@ionic/react";
import React from "react";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <IonButton routerLink="/profile">Go to profile</IonButton>
    </div>
  );
};

export default ExploreContainer;
