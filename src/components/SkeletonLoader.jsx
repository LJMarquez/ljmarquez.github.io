import "../styles/SkeletonLoader.css"

export const ProjectCardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-buttons">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  )
}

export const ProfileSkeleton = () => {
  return (
    <div className="skeleton-profile">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-details">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  )
}

export const TextSkeleton = ({ lines = 3, width = "100%" }) => {
  return (
    <div className="skeleton-text-block" style={{ width }}>
      {Array(lines)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={`skeleton-text ${index === lines - 1 && lines > 1 ? "short" : ""}`}></div>
        ))}
    </div>
  )
}
