import { LayoutProps } from "../../typings";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="container flex h-screen items-center justify-center">
      <div className="w-full max-w-xl rounded-lg bg-gray-blue p-8 text-center text-[1.75rem] font-bold">
        {children}
      </div>
    </main>
  );
};

export default Layout;
