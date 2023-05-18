import { FC } from "react";
import styles from "./ChatSkeletons.module.css"
import { Skeleton } from "@mui/material";
const ChatSkeletons: FC = () => {
  const conversationSkeletons = () => {
    const loaders = []
    for (let i = 0; i < 10; i++) {
        loaders.push(<div className={styles.row}>
          <Skeleton className={styles.skeletonItem} variant="rectangular" />
        </div>)
    }
    return loaders
}
  return (
    <div className={styles.skeletonsContainer}>
      <div className={styles.navSkeleton}>
        <Skeleton className={styles.avatar} variant="circular" />
        <Skeleton className={styles.rowSkeleton} variant="rectangular" />
        </div>
       { conversationSkeletons()}
      <div className={styles.footerSkeleton}>
        <Skeleton className={styles.rowSkeleton} variant="rectangular" />
      </div>
    </div>
  )
}
export default ChatSkeletons