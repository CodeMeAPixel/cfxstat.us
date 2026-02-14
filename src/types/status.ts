export type ServiceStatus =
	| "operational"
	| "degraded"
	| "partial"
	| "major"
	| "unknown";

export interface ServiceEndpoint {
	id: string;
	name: string;
	url: string;
	description?: string;
	method?: "GET" | "HEAD" | "POST";
	expectedStatus?: number;
	acceptRange?: boolean;
	validateResponse?: (status: number, body: string) => boolean;
}

export interface ServiceCategory {
	id: string;
	name: string;
	icon: string;
	color: string;
	services: ServiceEndpoint[];
}

export interface ServiceResult {
	id: string;
	name: string;
	status: ServiceStatus;
	responseTime: number | null;
	statusCode: number | null;
	checkedAt: string;
	error?: string;
}

export interface CategoryResult {
	id: string;
	name: string;
	icon: string;
	color: string;
	overallStatus: ServiceStatus;
	services: ServiceResult[];
}

export interface StatusSummary {
	overall: ServiceStatus;
	categories: CategoryResult[];
	lastChecked: string;
	totalServices: number;
	operationalCount: number;
}
