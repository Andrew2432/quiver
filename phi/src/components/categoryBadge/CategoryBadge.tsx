import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Badge from "react-bootstrap/Badge";
import { CategoryBadgeProps } from "./CategoryBadgeProps";

function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <h4 className={`px-2`}>
      <Link href={`/blog/categories/${category.slug}`} passHref>
        <Badge
          pill
          variant="info"
          className={`px-3 py-2`}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faTags} className={`ml-1 mr-2`} />
          {category.name}
        </Badge>
      </Link>
    </h4>
  );
}

export default CategoryBadge;
