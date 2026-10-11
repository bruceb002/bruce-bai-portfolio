"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { ProjectsGridProps, Project } from "@/components/projects/types";

export const ProjectsGrid = ({
  projects,
  className = "",
}: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = useCallback(
    (project: Project) => setSelectedProject(project),
    [],
  );
  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* Added 'relative' and 'w-full' to trap absolute elements and prevent teleporting */}
      <motion.div 
        layout 
        className={`flex flex-wrap justify-center gap-6 relative w-full ${className}`}
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout 
              // Swapped Y for X to create a horizontal carousel swipe effect
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -60 }}
              transition={{ 
                layout: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
                x: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] origin-center"
            >
              <ProjectCard
                project={project}
                onViewDetails={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
};