"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { BrideZillaChat } from "@/app/bridezilla-chat";

type DestinationId = "dashboard" | "wedding-tasks";

type NavItem = {
  id: string;
  label: string;
  icon:
    | "dashboard"
    | "tasks"
    | "inspiration"
    | "invitations"
    | "budget"
    | "vendors"
    | "settings";
  href?: `#${DestinationId}`;
};

const NAV_GROUPS: { label: string; items: NavItem[] }[] = [
  {
    label: "Planning",
    items: [
      { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "#dashboard" },
      {
        id: "wedding-tasks",
        label: "Wedding Tasks",
        icon: "tasks",
        href: "#wedding-tasks",
      },
    ],
  },
  {
    label: "Creative Studio",
    items: [
      { id: "inspiration", label: "Inspiration", icon: "inspiration" },
      { id: "invitations", label: "Invitations", icon: "invitations" },
    ],
  },
  {
    label: "Management",
    items: [
      { id: "budget", label: "Budget Tracker", icon: "budget" },
      { id: "vendors", label: "Vendors", icon: "vendors" },
      { id: "settings", label: "Settings", icon: "settings" },
    ],
  },
];

function NavIcon({ icon }: { icon: NavItem["icon"] }) {
  const sharedProps = {
    "aria-hidden": true,
    className: "sidebar-nav-icon",
    fill: "none",
    viewBox: "0 0 24 24",
  } as const;

  switch (icon) {
    case "dashboard":
      return (
        <svg {...sharedProps}>
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
        </svg>
      );
    case "tasks":
      return (
        <svg {...sharedProps}>
          <path d="m4 6 1.5 1.5L8.5 4.5M11 6h9M4 12l1.5 1.5 3-3M11 12h9M4 18l1.5 1.5 3-3M11 18h9" />
        </svg>
      );
    case "inspiration":
      return (
        <svg {...sharedProps}>
          <path d="M9 18h6M10 22h4M8.2 14.7A7 7 0 1 1 15.8 14.7c-.8.6-1.3 1.4-1.3 2.3h-5c0-.9-.5-1.7-1.3-2.3Z" />
        </svg>
      );
    case "invitations":
      return (
        <svg {...sharedProps}>
          <path d="M3 6.5h18v12H3zM3.5 7l8.5 7 8.5-7" />
        </svg>
      );
    case "budget":
      return (
        <svg {...sharedProps}>
          <path d="M4 6h16v13H4zM16 10h4v5h-4a2.5 2.5 0 0 1 0-5ZM7 6V4h10v2" />
        </svg>
      );
    case "vendors":
      return (
        <svg {...sharedProps}>
          <path d="M4 10v10h16V10M3 10l2-6h14l2 6M8 20v-6h8v6M3 10a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2" />
        </svg>
      );
    case "settings":
      return (
        <svg {...sharedProps}>
          <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
          <path d="m19 13.5 1.2 1-.8 2-1.6-.1a8 8 0 0 1-1.4 1.4l.1 1.6-2 .8-1-1.2a8 8 0 0 1-2 0l-1 1.2-2-.8.1-1.6a8 8 0 0 1-1.4-1.4l-1.6.1-.8-2 1.2-1a8 8 0 0 1 0-2l-1.2-1 .8-2 1.6.1a8 8 0 0 1 1.4-1.4l-.1-1.6 2-.8 1 1.2a8 8 0 0 1 2 0l1-1.2 2 .8-.1 1.6a8 8 0 0 1 1.4 1.4l1.6-.1.8 2-1.2 1a8 8 0 0 1 0 2Z" />
        </svg>
      );
  }
}

export function PlannerShell({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isBrideZillaOpen, setIsBrideZillaOpen] = useState(false);
  const [activeDestination, setActiveDestination] =
    useState<DestinationId>("dashboard");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const brideZillaLauncherRef = useRef<HTMLButtonElement>(null);
  const brideZillaCloseRef = useRef<HTMLButtonElement>(null);
  const brideZillaDrawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 63.999rem)");
    const updateViewport = () => {
      setIsMobile(mobileQuery.matches);
      if (!mobileQuery.matches) setIsMobileOpen(false);
    };

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);

    return () => mobileQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    const updateFromHash = () => {
      if (window.location.hash === "#wedding-tasks") {
        setActiveDestination("wedding-tasks");
      } else {
        setActiveDestination("dashboard");
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isBrideZillaOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    brideZillaCloseRef.current?.focus();

    const handleDrawerKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsBrideZillaOpen(false);
        requestAnimationFrame(() => brideZillaLauncherRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = brideZillaDrawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleDrawerKeys);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDrawerKeys);
    };
  }, [isBrideZillaOpen]);

  const closeMobileNavigation = (returnFocus = true) => {
    setIsMobileOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  const closeBrideZillaDrawer = () => {
    setIsBrideZillaOpen(false);
    requestAnimationFrame(() => brideZillaLauncherRef.current?.focus());
  };

  return (
    <div
      className={`planner-app-shell${isCollapsed ? " sidebar-is-collapsed" : ""}${
        isMobileOpen ? " sidebar-is-open" : ""
      }${isBrideZillaOpen ? " bridezilla-is-open" : ""}`}
    >
      <aside
        aria-label="Primary navigation"
        aria-modal={isMobile ? isMobileOpen : undefined}
        className="planner-sidebar"
        id="planner-sidebar"
        inert={
          isBrideZillaOpen || (isMobile && !isMobileOpen) ? true : undefined
        }
        role={isMobile ? "dialog" : undefined}
      >
        <div className="sidebar-brand-row">
          <a
            aria-label="Ever After dashboard"
            className="sidebar-brand"
            href="#dashboard"
            onClick={() => {
              setActiveDestination("dashboard");
              closeMobileNavigation(false);
            }}
          >
            <span className="sidebar-brand-seal" aria-hidden="true">
              EA
            </span>
            <span className="sidebar-brand-copy">
              <strong>Ever After</strong>
              <span>Wedding planner</span>
            </span>
          </a>
          <button
            aria-label="Close navigation"
            className="sidebar-mobile-close"
            onClick={() => closeMobileNavigation()}
            ref={closeButtonRef}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="sidebar-navigation" aria-label="Planner destinations">
          {NAV_GROUPS.map((group) => (
            <div className="sidebar-nav-group" key={group.label}>
              <p className="sidebar-group-title">{group.label}</p>
              <ul>
                {group.items.map((item) => {
                  const isActive = item.id === activeDestination;
                  const accessibleLabel = item.href
                    ? item.label
                    : `${item.label}, coming soon`;

                  return (
                    <li key={item.id}>
                      {item.href ? (
                        <a
                          aria-current={isActive ? "location" : undefined}
                          aria-label={accessibleLabel}
                          className={`sidebar-nav-link${isActive ? " is-active" : ""}`}
                          href={item.href}
                          onClick={() => {
                            setActiveDestination(item.id as DestinationId);
                            closeMobileNavigation(false);
                          }}
                          title={isCollapsed ? item.label : undefined}
                        >
                          <NavIcon icon={item.icon} />
                          <span className="sidebar-nav-label">{item.label}</span>
                        </a>
                      ) : (
                        <span
                          aria-disabled="true"
                          aria-label={accessibleLabel}
                          className="sidebar-nav-link is-unavailable"
                          role="link"
                          tabIndex={0}
                          title={isCollapsed ? `${item.label} — coming soon` : undefined}
                        >
                          <NavIcon icon={item.icon} />
                          <span className="sidebar-nav-label">{item.label}</span>
                          <span className="sidebar-soon-badge">Soon</span>
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <button
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
          className="sidebar-collapse-button"
          onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          title={isCollapsed ? "Expand navigation" : undefined}
          type="button"
        >
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="m14 7-5 5 5 5" />
          </svg>
          <span className="sidebar-collapse-label">Collapse navigation</span>
        </button>
      </aside>

      {isMobileOpen && (
        <button
          aria-label="Close navigation"
          className="sidebar-backdrop"
          onClick={() => closeMobileNavigation()}
          type="button"
        />
      )}

      <div
        className="planner-shell-content"
        inert={
          isBrideZillaOpen || (isMobile && isMobileOpen) ? true : undefined
        }
      >
        <div className="mobile-navigation-bar">
          <button
            aria-controls="planner-sidebar"
            aria-expanded={isMobileOpen}
            aria-label="Open navigation"
            className="mobile-menu-button"
            onClick={() => setIsMobileOpen(true)}
            ref={menuButtonRef}
            type="button"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <div>
            <p>Ever After</p>
            <span>Planning journal</span>
          </div>
        </div>
        {children}
      </div>

      {isBrideZillaOpen && (
        <button
          aria-hidden="true"
          className="bridezilla-drawer-backdrop"
          onClick={closeBrideZillaDrawer}
          tabIndex={-1}
          type="button"
        />
      )}

      <aside
        aria-hidden={!isBrideZillaOpen}
        aria-labelledby="bridezilla-drawer-title"
        aria-modal="true"
        className="bridezilla-drawer"
        id="bridezilla-drawer"
        inert={!isBrideZillaOpen ? true : undefined}
        ref={brideZillaDrawerRef}
        role="dialog"
      >
        <header className="bridezilla-drawer-header">
          <div className="bridezilla-drawer-title">
            <span className="bridezilla-drawer-emblem" aria-hidden="true">
              ☾
            </span>
            <div>
              <p>AI wedding-planning assistant</p>
              <h2 id="bridezilla-drawer-title">BrideZilla</h2>
            </div>
          </div>
          <button
            aria-label="Close BrideZilla"
            className="bridezilla-drawer-close"
            onClick={closeBrideZillaDrawer}
            ref={brideZillaCloseRef}
            type="button"
          >
            <span>Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="bridezilla-drawer-body">
          <BrideZillaChat />
        </div>
      </aside>

      <button
        aria-controls="bridezilla-drawer"
        aria-expanded={isBrideZillaOpen}
        aria-label="Open BrideZilla AI assistant"
        className="bridezilla-launcher"
        inert={isMobileOpen || isBrideZillaOpen ? true : undefined}
        onClick={() => setIsBrideZillaOpen(true)}
        ref={brideZillaLauncherRef}
        tabIndex={isMobileOpen || isBrideZillaOpen ? -1 : undefined}
        type="button"
      >
        <span className="bridezilla-launcher-emblem" aria-hidden="true">
          ☾
        </span>
        <span>Ask BrideZilla</span>
        <span className="bridezilla-launcher-spark" aria-hidden="true">
          ✦
        </span>
      </button>
    </div>
  );
}
