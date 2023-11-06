import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarksAction } from "./actions";
import ListCardPost from "../../container/ListCardPosts";

export default function BookmarkPage() {
  const dispatch = useDispatch();
  const { bookmarks, isLoading } = useSelector((state) => state.bookmarksReducer);

  useEffect(() => {
    dispatch(getBookmarksAction());
  }, []);

  return (
    <div>
      <ListCardPost payload={bookmarks} isLoading={isLoading} bookmarks={bookmarks} />
    </div>
  );
}
