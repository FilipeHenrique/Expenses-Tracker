import Sidebar from "../../components/Sidebar";
import { SiteFooter } from "../../components/footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Sidebar />
      {children}
      <SiteFooter />
    </div>
  );
}
