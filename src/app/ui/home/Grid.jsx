import React from "react";
const Grid = () => {
  return (
    <>
      <section className="h-full w-full">
        <section className="w-full h-full">
          <div className="md:grid gap-6 bg-slate-100 items-center">
            <div className="flex flex-col justify-center  space-y-8 text-center p-5">
              <div className="space-y-2 ">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-green-500">
                  Discover Our Unique Features
                </h1>
                <p className="max-w-[600px]  md:text-xl mx-auto">
                  Our features are designed to enhance your productivity and
                  streamline your workflow.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2  border-b-4 border-[#A0D6B4] p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <InboxIcon className="h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold ">Smart AI</h2>
                    <p className="">
                      Our Smart AI feature helps you manage your Tasks
                      efficiently by prioritizing important Task.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-b-4 border-[#A0D6B4] p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <MergeIcon className=" h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold ">Seamless Integration</h2>
                    <p className="">
                      Seamless Integration allows you to connect with your
                      favorite apps and services without leaving your inbox.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-b-4 border-[#A0D6B4] p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <SettingsIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold ">
                      Advanced Customization
                    </h2>
                    <p className="">
                      With Advanced Customization, you can personalize your
                      email client to suit your preferences and work style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Grid;
function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
