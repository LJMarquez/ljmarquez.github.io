import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedPackageItem, setSelectedPackageItem] = useState(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const imageIntervalRef = useRef(null)
  const videoRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isHovered && project.type === "graphic design" && project.promotionalPackageItems) {
      // Create an array of all images including the cover image
      const allImages = [
        `/assets/graphic-design-projects/${project.id}/${project.coverImg}`,
        ...project.promotionalPackageItems.map((item) => `/assets/graphic-design-projects/${project.id}/${item.img}`),
      ]

      // Set up interval to cycle through images
      imageIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
      }, 1500)
    }

    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current)
      }
    }
  }, [isHovered, project])

  // Handle video playback for code projects
  useEffect(() => {
    if (videoRef.current && videoLoaded && !videoError) {
      if (isHovered) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
          setVideoError(true)
        })
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, videoLoaded, videoError])

  // Handle clicking outside the modal to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [modalOpen])

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (modalOpen && event.key === "Escape") {
        closeModal()
      }
    }

    if (modalOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [modalOpen])

  const openModal = () => {
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
    setSelectedPackageItem(null)
  }

  const handlePackageItemClick = (e, item) => {
    e.stopPropagation()
    setSelectedPackageItem(item)
    openModal()
  }

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  // Get the current image to display
  const getCurrentImage = () => {
    if (project.type === "graphic design" && project.promotionalPackageItems && isHovered) {
      const allImages = [
        `/assets/graphic-design-projects/${project.id}/${project.coverImg}`,
        ...project.promotionalPackageItems.map((item) => `/assets/graphic-design-projects/${project.id}/${item.img}`),
      ]
      return allImages[currentImageIndex]
    }

    return project.type === "coding"
      ? `/assets/project-covers/${project.coverImg}`
      : `/assets/graphic-design-projects/${project.id}/${project.coverImg}`
  }

  return (
    <>
      <motion.div
        className="project-card position-relative"
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
      >
        {project.awards && (
          <div className="badge-container">
            {project.awards.map((award, index) => (
              <div
                key={index}
                className="project-badge"
                style={{
                  backgroundColor:
                    award === "gold"
                      ? "var(--warning)"
                      : award === "silver"
                        ? "var(--text-muted)"
                        : "var(--accent-tertiary)",
                }}
              >
                {award === "gold" ? "Gold" : award === "silver" ? "Silver" : "Bronze"}
              </div>
            ))}
          </div>
        )}

        <div className="project-image">
          {project.type === "coding" ? (
            <>
              <video
                ref={videoRef}
                src={`assets/project-videos/${project.id}.mp4`}
                muted
                loop
                playsInline
                className={`project-video ${videoLoaded && !videoError ? "loaded" : "hidden"}`}
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                poster={`assets/project-covers/${project.coverImg}`}
              />
              {(!videoLoaded || videoError) && (
                <img
                  src={`assets/project-covers/${project.coverImg}`}
                  alt={`${project.title} project`}
                  className="fallback-image"
                  style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
                />
              )}
            </>
          ) : (
            <img
              src={getCurrentImage() || "/placeholder.svg"}
              alt={`${project.title} project`}
              style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
            />
          )}
          <div className="project-overlay">
            <div className="project-overlay-content">
              <span>View Details</span>
            </div>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-header">{project.header}</p>
          <p className="project-description">{project.description.replace(/<[^>]*>/g, "")}</p>

          {project.type === "graphic design" && project.promotionalPackageItems && (
            <div className="package-items">
              {project.promotionalPackageItems.map((item, index) => (
                <button key={index} className="package-item-button" onClick={(e) => handlePackageItemClick(e, item)}>
                  {item.title}
                </button>
              ))}
            </div>
          )}

          <div className="project-links">
            <a
              className="project-link"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
            </a>
            {project.repoLink && (
              <a
                className="project-link"
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <div className="modal active" onClick={closeModal}>
            <motion.div
              className="modal-content"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>

              {selectedPackageItem ? (
                <>
                  <h2 className="modal-title">{selectedPackageItem.title}</h2>
                  <div className="modal-package-content">
                    <img
                      src={`/assets/graphic-design-projects/${project.id}/${selectedPackageItem.img}`}
                      alt={selectedPackageItem.title}
                      className="modal-package-image"
                    />
                    <div className="modal-footer">
                      <a
                        className="modal-button"
                        href={`/assets/graphic-design-projects/${project.id}/${selectedPackageItem.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Full {selectedPackageItem.title}
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="modal-title">{project.title}</h2>
                  <div className="modal-body" dangerouslySetInnerHTML={{ __html: project.description }} />
                  <div className="modal-footer">
                    <a className="modal-button" href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a className="modal-button" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
