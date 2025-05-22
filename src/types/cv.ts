export interface Profile {
  name: string;
  email: string;
  phone: string;
  github: string;
  address: string;
  summary: string;
}

export interface Education {
  id?: string;
  name: string;
  location: string;
  from: string;
  to: string;
  major: string;
  degree: string;
  gpa: string;
  description: string;
}

export interface Experience {
  id?: string;
  name: string;
  location: string;
  from: string;
  to: string;
  position: string;
  description: string;
  technologies: string;
}
export interface Project {
  id?: string;
  title: string;
  description: string;
  technologies: string;
  link?: string;
}

export interface Certificate {
  id?: string;
  name: string;
  date: string;
  link: string;
  description: string;
}

export interface Language {
  id?: string;
  name: string;
  level?: string;
}

export interface Technology {
  id?: string;
  name: string;
  level?: string;
}

export interface RouteContext{
  params: {id: string}
}