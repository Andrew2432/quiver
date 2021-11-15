import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";
import { DateBadgeProps } from "./DateBadgeProps";

function DateBadge({ date }: DateBadgeProps) {
  return (
    <h4 className={`px-2`}>
      <Badge pill variant="secondary" className={`px-3 py-2`}>
        <FontAwesomeIcon icon={faCalendarAlt} className={`ml-1 mr-2`} />
        {new Date(date).toLocaleString("en-IN", {
          year: "numeric",
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </Badge>
    </h4>
  );
}

export default DateBadge;
