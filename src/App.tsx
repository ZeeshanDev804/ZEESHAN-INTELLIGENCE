import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const workforce = [
  { name: "Opportunity Finder", status: "ACTIVE", icon: BriefcaseBusiness },
  { name: "Task Analyzer", status: "READY", icon: Target },
  { name: "Risk & Scam Checker", status: "READY", icon: ShieldCheck },
  { name: "Proposal Agent", status: "READY", icon: FileText },
  { name: "Client Communication", status: "READY", icon: MessageSquare },
  { name: "Project & Delivery", status: "READY", icon: Zap },
];

const pipeline = [
  { label: "Discovered", value: "0", icon: BriefcaseBusiness },
  { label: "Under Review", value: "0", icon: Target },
  { label: "Awaiting Approval", value: "0", icon: Clock3 },
  { label: "Active Projects", value: "0", icon: Activity },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={20} />
          </div>

          <div>
            <div className="brand-name">ZEESHAN</div>
            <div className="brand-subtitle">INTELLIGENCE</div>
          </div>
        </div>

        <div className="ceo-card">
          <div className="ceo-avatar">ZA</div>
          <div>
            <div className="ceo-label">FOUNDER & CEO</div>
            <div className="ceo-name">Zeeshan Afzal</div>
          </div>
        </div>

        <nav className="navigation">
          <div className="nav-section">COMMAND</div>

          <button className="nav-item active">
            <LayoutDashboard size={18} />
            <span>Command Center</span>
          </button>

          <button className="nav-item">
            <BriefcaseBusiness size={18} />
            <span>Opportunities</span>
          </button>

          <button className="nav-item">
            <Bot size={18} />
            <span>AI Workforce</span>
          </button>

          <button className="nav-item">
            <CheckCircle2 size={18} />
            <span>Approvals</span>
          </button>

          <div className="nav-section">OPERATIONS</div>

          <button className="nav-item">
            <Users size={18} />
            <span>Clients
