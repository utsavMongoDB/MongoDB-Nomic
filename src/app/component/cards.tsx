import "../fonts.css";
import { useState } from "react";
import ExpandableCard from "@leafygreen-ui/expandable-card";
import LeafyGreenProvider from "@leafygreen-ui/leafygreen-provider";

interface Activities {
  time: string;
  activity : string;
  details: string;
  location: {
    lat: number;
    lng: number;
  };
}

// const [open, setOpen] = useState(true);
var open = true;

interface ItineraryCardsProps {
  title: string;
  description: string;
  // activities: Activities[];
  activities: string;
}

const ItineraryCards: React.FC<ItineraryCardsProps> = ({ title, description, activities }) => {
  return (
    <LeafyGreenProvider>
      <ExpandableCard
      title={title}
      description={description}
      isOpen={true}
      style={{ marginBottom: "1rem", width: "35vw", alignSelf: "center", fontSize: 'medium', backgroundColor: "#e0f7e0", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {activities.split('‣').filter(activity => activity.trim() !== '').map((activity, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <div style={{ flex: "0 0 50px", textAlign: "center" }}>
          <div style={{ width: "10px", height: "10px", backgroundColor: "#32cd32", borderRadius: "50%", margin: "0 auto" }}></div>
          {index < activities.split('‣').filter(activity => activity.trim() !== '').length - 1 && <div style={{ width: "2px", height: "100%", backgroundColor: "#32cd32", margin: "0 auto" }}></div>}
          </div>
          <div style={{ flex: "1", paddingLeft: "1rem" }}>
          <li className="activitiesData" style={{ marginBottom: "0.5rem", color: "#333" }}>{activity.trim()}</li>
          <hr style={{ margin: "0.5rem 0", borderColor: "#32cd32" }} />
          </div>
        </div>
        ))}
      </ul>
      
      </ExpandableCard>
    </LeafyGreenProvider>
  );
}

export default ItineraryCards;