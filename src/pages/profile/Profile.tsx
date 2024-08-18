import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/ui";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { username } = useParams();

  const user = {
    name: "Nathan Ospino",
    login: "C4lumny",
    avatarUrl: "https://ejemplo.com/avatar.jpg",
    bio: "Desarrollador de software",
    followers: 1,
    following: 4,
  };

  const repositories = [
    { name: "FlyEase", description: "", language: "JavaScript", stars: 1 },
    { name: "EscolaApi", description: "", language: "JavaScript", stars: 1 },
    { name: "C4lumny", description: "Config files for my GitHub profile.", language: "", stars: 1 },
    { name: "FlyEaseManager", description: "", language: "TypeScript", stars: 1 },
    { name: "Escola", description: "Plataforma educativa", language: "TypeScript", stars: 1 },
    { name: "GvManager", description: "Proyecto realizado por Nathan Ospino e Isaac Jacome", language: "C#", stars: 1 },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8 flex">
        <aside className="w-1/4 pr-8">
          <img src={user.avatarUrl} alt={user.name} className="rounded-full w-64 h-64" />
          <h1 className="text-2xl font-bold mt-4 text-gray-900">{user.name}</h1>
          <h2 className="text-xl text-gray-500">{user.login}</h2>
          <p className="mt-4 text-gray-700">{user.bio}</p>
          <div className="mt-4 flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <span>
              {user.followers} followers · {user.following} following
            </span>
          </div>
        </aside>

        <section className="w-3/4 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Random Repositories</h3>
            <div className="">
              <Link to={`/${username}/new`}>
                <button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  New Repository
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {repositories.map((repo) => (
              <div key={repo.name} className="border-b border-gray-300 rounded-md p-4">
                <h4 className="text-blue-600 font-semibold">{repo.name}</h4>
                <p className="text-sm text-gray-500 mt-2">{repo.description}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-1 ${
                        repo.language === "JavaScript"
                          ? "bg-yellow-400"
                          : repo.language === "TypeScript"
                          ? "bg-blue-400"
                          : "bg-green-400"
                      }`}
                    ></span>
                    {repo.language}
                  </span>
                  <span className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {repo.stars}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
