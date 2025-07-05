import React, { createContext, useContext } from "react";
import { Section } from "@/types/common";

export interface ProfileSectionContextValue {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

const ProfileSectionContext = createContext<
  ProfileSectionContextValue | undefined
>(undefined);

export const useProfileSection = (): ProfileSectionContextValue => {
  const context = useContext(ProfileSectionContext);
  if (!context) {
    throw new Error(
      "useProfileSection must be used within a ProfileSectionProvider",
    );
  }
  return context;
};

interface ProfileSectionProviderProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  children: React.ReactNode;
}

export const ProfileSectionProvider: React.FC<ProfileSectionProviderProps> = ({
  currentSection,
  setCurrentSection,
  children,
}) => {
  const memoizedValue = React.useMemo(
    () => ({ currentSection, setCurrentSection }),
    [currentSection, setCurrentSection],
  );

  return (
    <ProfileSectionContext.Provider value={memoizedValue}>
      {children}
    </ProfileSectionContext.Provider>
  );
};

export default ProfileSectionContext;
