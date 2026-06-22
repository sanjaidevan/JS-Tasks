import { describe, it, expect, vi, beforeEach } from "vitest";

import { getAllEmployees } from "../services/employee.services.js";
import { readAllEmployee } from "../controller/employee.controller.js";


vi.mock("../services/employee.services.js", () => ({
    getAllEmployees: vi.fn(),
    getEmployeeById: vi.fn(),
    addEmployee: vi.fn(),
    updateEmployee: vi.fn(),
    deleteEmployee: vi.fn(),
}));

let req;
let res;
let next;

beforeEach(() => {
    req = {};
    res = {
        status: vi.fn().mockReturnThis(),
        json: vi.fn(),
    };
    next = vi.fn();

    vi.clearAllMocks();
});

const employees = await getAllEmployees();

describe("readAllEmployee", () => {
    it("should return employee list", async () => {
        getAllEmployees.mockResolvedValue([
            {
                emp_id: 1,
                firstName: "John",
                role: "Developer",
                salary: 50000,
            },
            {
                emp_id: 2,
                firstName: "Mike",
                role: "Tester",
                salary: 40000,
            },
        ]);

        await readAllEmployee(req, res, next);

        expect(getAllEmployees).toHaveBeenCalled();

        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.json).toHaveBeenCalledWith([
            {
                emp_id: 1,
                firstName: "John",
                role: "Developer",
            },
            {
                emp_id: 2,
                firstName: "Mike",
                role: "Tester",
            },
        ]);
    });

    it("should call next on error", async () => {
        const error = new Error("DB Error");

        getAllEmployees.mockRejectedValue(error);

        await readAllEmployee(req, res, next);

        expect(next).toHaveBeenCalledWith(error);
    });
});