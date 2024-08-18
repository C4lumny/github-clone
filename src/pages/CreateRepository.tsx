import React, { useState } from "react";
import { Header } from "../components/ui";

const CreateRepository = () => {
  const [repoName, setRepoName] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para crear el repositorio y subir el archivo
    console.log("Creando repositorio:", repoName, "Archivo:", files);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create a new repository</h1>
          <p className="mb-8 text-gray-600">
            A repository contains all project files, including the revision history. Already have a project repository
            elsewhere?
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Import a repository.
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="repo-name" className="block text-sm font-medium mb-2">
                Repository name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="repo-name"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                required
              />
              <p className="mt-2 text-sm text-gray-600">
                Great repository names are short and memorable. Need inspiration? How about
                <span className="text-blue-600 ml-1">refactored-octo-bassoon</span>?
              </p>
            </div>

            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium mb-2">
                Upload file
              </label>
              <input
                type="file"
                id="file-upload"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                multiple
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFiles(Array.from(e.target.files));
                  } else {
                    setFiles([]);
                  }
                }}
              />
            </div>

            <div className="pt-5">
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Create repository
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateRepository;
