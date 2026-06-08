import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { Users, Mail, Phone, Calendar, TrendingUp, RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

function StatCard({ label, value, icon: Icon, color }: {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  return (
    <div className={`p-6 rounded-xl border border-border bg-card flex items-start gap-4`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <div>
        <p className="text-2xl font-bold">{value.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export default function LeadsDashboard() {
  const [page, setPage] = useState(1);
  const LIMIT = 20;

  const statsQuery = trpc.contact.getStats.useQuery(undefined, { refetchInterval: 30_000 });
  const leadsQuery = trpc.contact.getLeads.useQuery({ page, limit: LIMIT, status: "all" }, {
    keepPreviousData: true,
  } as any);

  const stats = statsQuery.data ?? { total: 0, today: 0, thisWeek: 0, thisMonth: 0 };
  const leads = leadsQuery.data?.data ?? [];
  const totalLeads = leadsQuery.data?.total ?? 0;
  const totalPages = Math.ceil(totalLeads / LIMIT);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-8" aria-label="Leads Dashboard">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>Lead Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">AIAutomationHub — Contact Submissions</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => { statsQuery.refetch(); leadsQuery.refetch(); }}
          aria-label="Refresh dashboard data"
        >
          <RefreshCw className={`w-4 h-4 ${leadsQuery.isFetching ? "animate-spin" : ""}`} aria-hidden="true" />
          Refresh
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Leads" value={stats.total} icon={Users} color="bg-primary/10 text-primary" />
        <StatCard label="New Today" value={stats.today} icon={TrendingUp} color="bg-green-500/10 text-green-600" />
        <StatCard label="This Week" value={stats.thisWeek} icon={Calendar} color="bg-blue-500/10 text-blue-600" />
        <StatCard label="This Month" value={stats.thisMonth} icon={MessageSquare} color="bg-purple-500/10 text-purple-600" />
      </div>

      {/* Leads Table */}
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold" style={{ fontFamily: "Poppins" }}>
            All Inquiries
            {totalLeads > 0 && (
              <span className="ml-2 text-xs text-muted-foreground font-normal">({totalLeads} total)</span>
            )}
          </h2>
        </div>

        {leadsQuery.isLoading ? (
          <div className="p-12 text-center text-muted-foreground">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" aria-hidden="true" />
            Loading leads...
          </div>
        ) : leads.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            <Users className="w-10 h-10 mx-auto mb-3 opacity-30" aria-hidden="true" />
            <p className="font-medium">No leads yet</p>
            <p className="text-sm mt-1">Contact form submissions will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table" aria-label="Contact leads">
              <thead>
                <tr className="border-b border-border bg-secondary/30 text-left">
                  <th className="px-4 py-3 font-semibold text-muted-foreground">#</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Name</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Email</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Phone</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Company</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Requirements</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Date</th>
                  <th className="px-4 py-3 font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, idx) => {
                  const rowNum = (page - 1) * LIMIT + idx + 1;
                  const dateStr = new Date(lead.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit", month: "short", year: "numeric",
                  });
                  const timeStr = new Date(lead.createdAt).toLocaleTimeString("en-IN", {
                    hour: "2-digit", minute: "2-digit",
                  });
                  return (
                    <tr key={lead.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground">{rowNum}</td>
                      <td className="px-4 py-3 font-medium">{lead.fullName}</td>
                      <td className="px-4 py-3">
                        <a
                          href={`mailto:${lead.email}?subject=Re: Your inquiry to AIAutomationHub`}
                          className="text-primary hover:underline flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                          aria-label={`Email ${lead.fullName}`}
                        >
                          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                          className="hover:text-primary flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                          aria-label={`Call ${lead.fullName}`}
                        >
                          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{lead.company ?? "—"}</td>
                      <td className="px-4 py-3 max-w-xs">
                        <p className="truncate text-muted-foreground" title={lead.requirements}>
                          {lead.requirements}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        <div>{dateStr}</div>
                        <div className="text-xs">{timeStr}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(lead.fullName)}%2C%20this%20is%20AIAutomationHub.%20Following%20up%20on%20your%20inquiry!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded hover:bg-green-500/10 text-green-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                            aria-label={`WhatsApp ${lead.fullName}`}
                            title="WhatsApp"
                          >
                            <MessageSquare className="w-4 h-4" aria-hidden="true" />
                          </a>
                          <a
                            href={`mailto:${lead.email}?subject=Re: Your inquiry to AIAutomationHub`}
                            className="p-1.5 rounded hover:bg-primary/10 text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label={`Email ${lead.fullName}`}
                            title="Email"
                          >
                            <Mail className="w-4 h-4" aria-hidden="true" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-border flex items-center justify-between text-sm">
            <p className="text-muted-foreground">
              Showing {(page - 1) * LIMIT + 1}–{Math.min(page * LIMIT, totalLeads)} of {totalLeads}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline" size="sm"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
              >
                Previous
              </Button>
              <Button
                variant="outline" size="sm"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
