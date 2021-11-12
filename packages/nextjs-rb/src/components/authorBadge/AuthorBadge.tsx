import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";
import { AuthorBadgeProps } from "./AuthorBadgeProps";

function AuthorBadge({ author }: AuthorBadgeProps) {
  return (
    <h4 className={`px-2`}>
      <Badge pill variant="primary" className={`px-3 py-2`}>
        <FontAwesomeIcon icon={faUser} className={`ml-1 mr-2`} />
        {author.name}
      </Badge>
    </h4>
  );
}

export default AuthorBadge;
