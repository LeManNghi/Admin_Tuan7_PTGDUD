import "./OverViewItem.css";
export default function OverviewItem({label, value, percentage, icon, bgColor}) {
    return(
        <div className="overview-item" style={{backgroundColor: bgColor}}>
            <img src={icon} alt="" />
            <h4>{label}</h4>
            <h2>{value}</h2>
            <span style={{color: "#0f9544"}}>{percentage}</span> period of change
        </div>
    )
}