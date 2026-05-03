export type Template = {
  slug: string
  name: string
  price: number
  originalPrice: number
  category: 'hr' | 'finance' | 'fitness'
  tagline: string
  description: string
  includes: string[]
  faqs: { q: string; a: string }[]
  etsyUrl: string
  image: string
  featured?: boolean
  bestseller?: boolean
}

export const TEMPLATES: Template[] = [
  {
    slug: 'hr-employee-management',
    name: 'HR & Employee Management Spreadsheet',
    price: 14.99,
    originalPrice: 37.00,
    category: 'hr',
    tagline: 'The all-in-one HR system for small businesses — no software required.',
    description:
      'Replace expensive HR software with this powerful Excel workbook. Manage hiring, onboarding, attendance, payroll, and performance reviews from a single, beautifully organized spreadsheet. Built for small to mid-size teams who want professional HR operations without the monthly subscription fees.',
    includes: [
      'Recruitment & applicant tracker',
      'New hire onboarding checklist',
      'Employee directory & database',
      'Attendance log with absence tracking',
      'Payroll summary tracker',
      'Performance review scorecard',
      'Instructions tab for easy setup',
    ],
    faqs: [
      {
        q: 'What makes this different from buying individual templates?',
        a: 'This is one integrated system — all your HR data lives in a single workbook with a dashboard overview. Individual templates are great for one task; this bundle connects them all.',
      },
      {
        q: 'How many employees does it support?',
        a: 'It works for teams of 5 to 500. Simply add rows as your company grows — there are no limits built into the spreadsheet.',
      },
      {
        q: 'Do I need advanced Excel skills to use this?',
        a: 'No. It is designed for everyday Excel users. Basic data entry is all you need — all formulas and formatting are pre-built.',
      },
      {
        q: 'Can I share this with my HR team?',
        a: 'Yes. Save it to a shared drive like SharePoint, OneDrive, or Google Drive and your whole team can access it.',
      },
      {
        q: 'Does it work on Mac?',
        a: 'Yes. It is fully compatible with Excel for Mac and PC. Google Sheets users may see minor formatting differences but all formulas work.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/1877838213/hr-employee-management-spreadsheet',
    image: '/templates/hr-employee-management.webp',
    featured: true,
    bestseller: true,
  },
  {
    slug: 'employee-onboarding',
    name: 'Employee Onboarding Template',
    price: 9.99,
    originalPrice: 16.65,
    category: 'hr',
    tagline: 'Get new hires up to speed from day one with a structured onboarding checklist.',
    description:
      'Stop winging new hire onboarding. This Excel template gives every new employee a consistent, professional start with task checklists, orientation schedules, equipment assignments, system access logs, and 30/60/90-day milestone tracking — all in one organized spreadsheet.',
    includes: [
      'New hire checklist with status tracking',
      'Orientation schedule planner',
      'Equipment & system access log',
      '30/60/90-day goal tracker',
      'Department-specific onboarding tabs',
      'Manager sign-off section',
    ],
    faqs: [
      {
        q: 'Can I customize this for my company?',
        a: 'Absolutely. All fields, colors, tab names, and task lists are fully editable to match your company processes.',
      },
      {
        q: 'How many employees can I onboard with this template?',
        a: 'Unlimited. Duplicate the onboarding tab for each new hire, or use the master tracker view to manage multiple employees at once.',
      },
      {
        q: 'Does this work for remote employees?',
        a: 'Yes. The template includes sections for equipment shipping, remote system setup, and virtual orientation scheduling.',
      },
      {
        q: 'Do I need any Excel add-ins or special software?',
        a: 'No add-ins required. Works with Excel 2016 and newer on both Mac and PC.',
      },
      {
        q: 'Is this good for small businesses without a dedicated HR team?',
        a: 'Perfect for it. Many of our customers are office managers or business owners handling HR themselves — this makes onboarding simple and repeatable.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/1890221647/employee-onboarding-template-tracking',
    image: '/templates/employee-onboarding.avif',
    featured: true,
    bestseller: true,
  },
  {
    slug: 'pto-tracker',
    name: 'PTO Tracker Spreadsheet',
    price: 9.99,
    originalPrice: 16.65,
    category: 'hr',
    tagline: 'Track employee vacation, sick days, and PTO balances automatically.',
    description:
      'Never lose track of employee PTO again. This Excel PTO tracker automatically calculates accruals, remaining balances, and year-to-date usage for every employee on your team. Manage vacation requests, sick days, and personal time in one clean spreadsheet — no expensive software needed.',
    includes: [
      'PTO accrual calculator by employee',
      'Individual balance tracker per employee',
      'Separate vacation, sick, and personal day categories',
      'Monthly and YTD usage summary',
      'Calendar view for visual planning',
      'Year-end rollover section',
    ],
    faqs: [
      {
        q: 'Does it calculate accruals automatically?',
        a: "Yes. Enter each employee's accrual rate (e.g. 1.5 days per month) and the running balance updates automatically.",
      },
      {
        q: 'Can I track different PTO types separately?',
        a: 'Yes. The template has separate columns and totals for vacation, sick days, and personal days.',
      },
      {
        q: 'Does it handle year-end rollover balances?',
        a: 'Yes. There is a built-in rollover section to carry unused PTO into the new year, or cap it at your company policy limit.',
      },
      {
        q: 'How many employees can I track?',
        a: 'The template handles teams of any size. Add employees by adding new rows — no limit.',
      },
      {
        q: 'Can employees request time off through this template?',
        a: 'This is a manager-side tracking tool. Employees submit requests through your normal process, and managers log approvals here.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4460883931/pto-tracker-spreadsheet-employee',
    image: '/templates/pto-tracker.webp',
  },
  {
    slug: 'hr-bundle',
    name: 'HR Template Bundle',
    price: 37.00,
    originalPrice: 61.66,
    category: 'hr',
    tagline: "Every HR template you need in one discounted bundle — save 40% vs. buying individually.",
    description:
      'Get the complete HR toolkit for small businesses at a fraction of the cost. This bundle includes seven essential Excel templates covering hiring, onboarding, employee management, attendance, payroll, and performance reviews. Everything you need to run professional HR operations — no subscriptions, no software, just Excel.',
    includes: [
      'Hiring & recruitment tracker',
      'Employee onboarding checklist',
      'Employee database & directory',
      'PTO & vacation balance tracker',
      'Payroll summary spreadsheet',
      'Performance review scorecard',
      'Attendance & absence log',
    ],
    faqs: [
      {
        q: 'How many templates are included in the bundle?',
        a: 'The bundle includes 7+ individual templates that cover the full employee lifecycle from hiring to offboarding.',
      },
      {
        q: 'How much do I save compared to buying individually?',
        a: 'Buying the templates individually would cost over $70. The bundle saves you 40%+ while giving you everything in one purchase.',
      },
      {
        q: 'Are future updates included?',
        a: 'Yes. Re-download any time from your Etsy purchases page to get the latest version of every template in the bundle.',
      },
      {
        q: 'Is this good for startups?',
        a: 'Ideal for startups and small businesses that need professional HR tools without the software cost. Many customers use this to build their HR process from scratch.',
      },
      {
        q: 'Do all the templates work together?',
        a: 'Yes. They are designed with consistent formatting and complementary structures so data flows logically between them.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4482536270/hr-template-bundle-digital-download',
    image: '/templates/hr-bundle.webp',
    featured: true,
  },
  {
    slug: 'employee-review',
    name: 'Employee Review Template',
    price: 4.19,
    originalPrice: 6.99,
    category: 'hr',
    tagline: 'Run structured, consistent performance reviews without expensive HR software.',
    description:
      'Make performance reviews fair, consistent, and data-driven. This Excel template lets you score employees across key performance categories, calculate an overall rating automatically, and document manager feedback — creating a repeatable review process that employees and managers both trust.',
    includes: [
      'Performance rating scorecard',
      'Category-by-category scoring (5-point scale)',
      'Weighted overall performance score',
      'Manager comments and feedback section',
      'Year-over-year performance comparison',
      'Employee acknowledgement section',
    ],
    faqs: [
      {
        q: 'Can I customize the performance categories?',
        a: 'Yes. All categories are fully editable — rename, add, or remove any to match your company values and job requirements.',
      },
      {
        q: 'Does it calculate the overall score automatically?',
        a: 'Yes. Enter ratings in each category and the overall performance score calculates automatically based on your weighting.',
      },
      {
        q: 'Can I use this for mid-year reviews and annual reviews?',
        a: 'Absolutely. The template works for quarterly, mid-year, or annual reviews. Just duplicate the tab for each review cycle.',
      },
      {
        q: 'How many employees can I review?',
        a: 'One tab per employee — duplicate as needed for your full team. There is no limit to how many review tabs you can add.',
      },
      {
        q: 'Does this work with Google Sheets?',
        a: 'Yes. Upload to Google Drive and open in Google Sheets. Minor formatting adjustments may be needed but all formulas work.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4458073548/employee-review-template-digital',
    image: '/templates/employee-review.webp',
  },
  {
    slug: 'employee-database',
    name: 'Employee Database Template',
    price: 5.99,
    originalPrice: 9.99,
    category: 'hr',
    tagline: 'Keep all your employee info organized in one searchable, sortable spreadsheet.',
    description:
      'Stop hunting through email threads and paper files for employee information. This Excel employee database gives you a single source of truth for your entire team — contact details, job titles, departments, start dates, employment status, and more. Fully filterable and sortable, no HR software required.',
    includes: [
      'Employee master list with sortable columns',
      'Department and role breakdown',
      'Contact directory (phone, email, emergency contact)',
      'Employment status tracker (active, terminated, on leave)',
      'Start date and tenure calculator',
      'Filterable by any field',
    ],
    faqs: [
      {
        q: 'How many employees can I add?',
        a: 'Unlimited. Just add new rows as your team grows — the formulas and filters scale automatically.',
      },
      {
        q: 'Is employee data secure in this spreadsheet?',
        a: "The file stays on your computer or company drive — nothing is uploaded externally. You can also apply Excel's built-in password protection.",
      },
      {
        q: 'Can I filter by department, status, or location?',
        a: "Yes. Every column supports Excel's built-in filter function so you can slice and view the data any way you need.",
      },
      {
        q: 'Can I export the data to other systems?',
        a: 'Yes. Save as CSV to import into payroll software, HRIS platforms, or any other system that accepts spreadsheet data.',
      },
      {
        q: 'Can I password-protect sensitive employee information?',
        a: "Yes. Excel's built-in sheet and workbook password protection works with this template to restrict access to sensitive data.",
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4491736035/employee-database-template-staff-tracker',
    image: '/templates/employee-database.webp',
  },
  {
    slug: 'vacation-tracker',
    name: 'Vacation Tracking Template',
    price: 3.59,
    originalPrice: 5.99,
    category: 'hr',
    tagline: "See who's out and when — plan team vacations without scheduling conflicts.",
    description:
      'Stop managing vacation requests in your head or scattered across emails. This Excel vacation tracker gives you a visual calendar view of who is out when, tracks remaining balances per employee, flags scheduling conflicts, and generates a monthly team summary — all automatically.',
    includes: [
      'Visual calendar view (12-month)',
      'Employee vacation balance tracker',
      'Request status column (pending/approved/denied)',
      'Conflict detection highlighting',
      'Monthly team absence summary',
      'Public holiday input section',
    ],
    faqs: [
      {
        q: 'Does it show a calendar view of who is out?',
        a: 'Yes. The calendar view lets you see the full team at a glance and immediately spot scheduling conflicts.',
      },
      {
        q: 'Can I track vacation for the whole year?',
        a: 'Yes. The template covers a full 12 months with a monthly breakdown and annual summary.',
      },
      {
        q: 'Does it handle part-time employees with different accrual rates?',
        a: 'Yes. You can set a custom accrual rate per employee, so part-time and full-time staff are tracked correctly.',
      },
      {
        q: 'Can I add public holidays so they are blocked off?',
        a: 'Yes. There is a public holiday input section that automatically accounts for those days in balance calculations.',
      },
      {
        q: 'Does this work for fully remote teams?',
        a: 'Perfect for remote teams. Save it to a shared cloud drive like OneDrive or Google Drive so everyone can see the calendar.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4323845246/vacation-tracking-template-excel',
    image: '/templates/vacation-tracker.webp',
  },
  {
    slug: 'employee-training',
    name: 'Employee Training Tracker',
    price: 3.59,
    originalPrice: 5.99,
    category: 'hr',
    tagline: "Track who has completed what training — and who needs a nudge.",
    description:
      "Know exactly where every employee stands on required training, certifications, and professional development. This Excel training tracker lets you log completions, track certification expiry dates, and see a bird's-eye view of training status across your entire team — without any LMS software.",
    includes: [
      'Training completion log per employee',
      'Certification expiry date tracker',
      'Employee-by-training completion matrix',
      'Completion percentage calculator',
      'Overdue and expiring soon flags',
      'Training type categories (mandatory, optional, compliance)',
    ],
    faqs: [
      {
        q: 'Can I track mandatory vs. optional training separately?',
        a: 'Yes. Each training entry has a type column so you can categorize and filter by mandatory, optional, or compliance training.',
      },
      {
        q: 'Does it flag when certifications are about to expire?',
        a: 'Yes. The template uses conditional formatting to highlight certifications expiring within 30 and 60 days.',
      },
      {
        q: 'How many employees and training courses can I add?',
        a: 'Unlimited. Add as many rows (employees) and columns (courses) as your organization requires.',
      },
      {
        q: 'Can I export this as a compliance report?',
        a: 'Yes. The matrix view is formatted for easy printing or PDF export to share with auditors or leadership.',
      },
      {
        q: 'Is this suitable for OSHA or safety compliance training?',
        a: 'Absolutely. Many customers use this specifically for safety and compliance training where documented completion records are required.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4324113988/employee-training-tracker-system',
    image: '/templates/employee-training.webp',
  },
  {
    slug: 'attendance-tracker',
    name: 'Employee Attendance Tracker',
    price: 3.59,
    originalPrice: 5.99,
    category: 'hr',
    tagline: 'Monitor attendance, absences, and late arrivals without expensive time-tracking software.',
    description:
      'Keep accurate attendance records for your entire team with this Excel attendance tracker. Log daily attendance, separate sick days from PTO, flag late arrivals, and generate monthly summaries automatically. Conditional formatting highlights attendance patterns before they become a problem.',
    includes: [
      'Daily attendance log for full year',
      'Absence type breakdown (vacation, sick, personal, unpaid)',
      'Late arrival and early departure tracker',
      'Monthly attendance summary per employee',
      'Absence pattern flags via conditional formatting',
      'Percentage attendance rate calculator',
    ],
    faqs: [
      {
        q: 'Can I track both in-office and remote attendance?',
        a: 'Yes. There is a location column to log remote, in-office, or hybrid attendance for each day.',
      },
      {
        q: 'Does it separate sick days from PTO?',
        a: 'Yes. Attendance types are broken down individually: vacation, sick, personal, and unpaid absence each have their own tracking.',
      },
      {
        q: 'Does it flag employees with excessive absences?',
        a: 'Yes. Conditional formatting automatically highlights employees who exceed a customizable absence threshold.',
      },
      {
        q: 'Can managers and HR both access it?',
        a: 'Yes. Save to a shared network drive or cloud storage for manager and HR access. You can password-protect specific sheets if needed.',
      },
      {
        q: 'How far back can I track attendance?',
        a: 'The template covers a full calendar year. Duplicate the workbook for each additional year to maintain historical records.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4325149741/employee-attendance-tracker-excel-hr',
    image: '/templates/attendance-tracker.avif',
  },
  {
    slug: 'hr-evaluation',
    name: 'HR Evaluation Template',
    price: 3.59,
    originalPrice: 5.99,
    category: 'hr',
    tagline: 'Score employees on KPIs with weighted criteria and automatic overall ratings.',
    description:
      'Make employee evaluations consistent and defensible with this KPI-based Excel evaluation template. Assign custom weights to performance criteria, calculate weighted scores automatically, and document strengths and development areas — creating a fair, repeatable evaluation process your whole organization can trust.',
    includes: [
      'KPI rating matrix with custom categories',
      'Weighted scoring calculator',
      'Strengths and development notes section',
      'Overall performance band output',
      'Evaluation history log',
      'Side-by-side multi-period comparison',
    ],
    faqs: [
      {
        q: 'Can I set different weights for different KPIs?',
        a: 'Yes. Assign custom weights to each category and the overall score recalculates automatically to reflect your priorities.',
      },
      {
        q: 'How is this different from the Employee Review Template?',
        a: 'This template is KPI-driven with weighted scores — better for roles with clear performance metrics. The Employee Review template is broader and more qualitative.',
      },
      {
        q: 'Can this support 360-degree reviews?',
        a: 'It can be adapted. Duplicate the scoring tab for self-review, peer review, and manager review, then average the results.',
      },
      {
        q: 'Can HR and managers both contribute to the evaluation?',
        a: 'Yes. Share via a company drive and have managers complete their section before HR finalizes the overall rating.',
      },
      {
        q: 'How many employees can I evaluate?',
        a: 'One evaluation per tab. Duplicate tabs as needed — there is no cap on how many employees you can evaluate.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4322232109/hr-evaluation-template-rating-system',
    image: '/templates/hr-evaluation.avif',
  },
  {
    slug: 'employee-timesheet',
    name: 'Employee Timesheet Template',
    price: 3.59,
    originalPrice: 5.99,
    category: 'hr',
    tagline: 'Track hours, calculate overtime, and generate payroll-ready weekly summaries.',
    description:
      'Accurately track employee hours without expensive time-tracking software. This Excel timesheet calculates regular hours, overtime, and project time automatically. Weekly summaries are formatted for easy payroll submission — just fill in the hours and let the formulas do the rest.',
    includes: [
      'Daily time entry log (in/out times)',
      'Automatic regular vs. overtime calculation',
      'Weekly hour summary',
      'Project and task code column',
      'Payroll-ready weekly totals',
      'Customizable overtime threshold',
    ],
    faqs: [
      {
        q: 'Does it calculate overtime automatically?',
        a: 'Yes. Set your overtime threshold (typically 40 hours per week) and overtime hours calculate and highlight automatically.',
      },
      {
        q: 'Can I track hours by project or client?',
        a: 'Yes. The project code column lets you break down hours by task, project, or client for billing or reporting purposes.',
      },
      {
        q: 'Is the output formatted for payroll submission?',
        a: 'Yes. The weekly summary is clean and structured for easy submission to payroll processors or direct upload to payroll software.',
      },
      {
        q: 'Can employees fill this out themselves?',
        a: 'Yes. Share the file with employees to self-report hours. Lock the formula cells to prevent accidental changes.',
      },
      {
        q: 'Does it work for salaried employees too?',
        a: 'It is best suited for hourly employees. Salaried employees can still use it to track project hours and task allocation.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4318904739/employee-timesheet-template-hour',
    image: '/templates/employee-timesheet.avif',
  },
  {
    slug: 'candidate-evaluation',
    name: 'Candidate Evaluation Tracker',
    price: 3.59,
    originalPrice: 5.99,
    category: 'hr',
    tagline: 'Score and compare job candidates objectively — make every hire a data-driven decision.',
    description:
      'Stop making hiring decisions based on gut feeling. This Excel candidate evaluation tracker lets you score applicants on skills, experience, culture fit, and interview performance. Compare candidates side-by-side, document reasoning, and build a hiring process that is consistent, fair, and defensible.',
    includes: [
      'Candidate scoring matrix',
      'Skills and experience rating section',
      'Interview performance scorecard',
      'Culture fit assessment',
      'Side-by-side candidate comparison view',
      'Hiring decision log with notes',
    ],
    faqs: [
      {
        q: 'How many candidates can I track per role?',
        a: 'Unlimited. Add as many candidate rows as you need for each open position.',
      },
      {
        q: 'Can I customize the evaluation criteria for different roles?',
        a: 'Yes. All scoring categories are fully editable — create a different criteria set for technical, sales, or leadership roles.',
      },
      {
        q: 'Can multiple interviewers score candidates separately?',
        a: 'Yes. Duplicate the scoring tab for each interviewer, then average the scores in the comparison view for a consensus rating.',
      },
      {
        q: 'Does it calculate a total candidate score automatically?',
        a: 'Yes. Score each category and the total score calculates automatically, ranking candidates from highest to lowest.',
      },
      {
        q: 'Can I use this across multiple open job roles?',
        a: 'Yes. Duplicate the worksheet tab for each open role to keep candidate evaluations separate and organized.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/1889805519/candidate-evaluation-tracker-hiring',
    image: '/templates/candidate-evaluation.avif',
  },
  {
    slug: 'weekly-budget',
    name: 'Weekly Budget Template',
    price: 3.59,
    originalPrice: 5.99,
    category: 'finance',
    tagline: 'Track exactly where your money goes every week and build better spending habits.',
    description:
      'Take control of your personal finances with this simple weekly budget template for Excel. Track income sources and expenses by category, see your running weekly balance, and spot overspending before it becomes a problem. Build better money habits with a clear picture of your finances — updated automatically as you enter data.',
    includes: [
      'Weekly income tracker (multiple sources)',
      'Expense categories (fixed and variable)',
      'Running weekly total and balance',
      'Monthly rollup summary',
      'Spending trend chart',
      'Budget vs. actual comparison',
    ],
    faqs: [
      {
        q: 'Is this for personal budgeting or business?',
        a: 'Designed for personal finances, but works great for freelancers and side business owners tracking weekly cash flow.',
      },
      {
        q: 'Does it calculate totals automatically?',
        a: 'Yes. Enter your income and expenses and everything totals, balances, and summarizes automatically.',
      },
      {
        q: 'Can I customize the expense categories?',
        a: 'Absolutely. Rename, add, or remove any category to match your actual spending habits.',
      },
      {
        q: 'Does it work in currencies other than USD?',
        a: 'Yes. Change the currency symbol in the cell format settings and it works for any currency.',
      },
      {
        q: 'Do I need to know Excel formulas to use this?',
        a: 'No. Just enter your numbers — all formulas are pre-built and the template is designed for everyday users.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/1890763491/weekly-budget-template-digital-download',
    image: '/templates/weekly-budget.webp',
  },
  {
    slug: 'net-worth-calculator',
    name: 'Financial Net Worth Calculator',
    price: 3.59,
    originalPrice: 5.99,
    category: 'finance',
    tagline: 'Know exactly where you stand financially — track assets, liabilities, and net worth over time.',
    description:
      'Get a crystal-clear picture of your financial health with this Excel net worth calculator. Track all your assets and liabilities, watch your net worth grow month by month, and see a visual trend chart that keeps you motivated. Updated automatically every time you enter new data.',
    includes: [
      'Assets tracker (cash, savings, investments, real estate, vehicles)',
      'Liabilities tracker (mortgage, loans, credit cards)',
      'Automatic net worth calculation',
      'Month-by-month trend chart',
      'Year-over-year net worth comparison',
      'Financial health summary section',
    ],
    faqs: [
      {
        q: 'What types of assets does the template cover?',
        a: 'It includes categories for cash, checking and savings accounts, retirement accounts (401k, IRA), real estate, vehicles, and other investments.',
      },
      {
        q: 'How often should I update this?',
        a: 'Monthly is the most popular cadence. The trend chart gets more useful the longer you track.',
      },
      {
        q: 'Does it show net worth trends over time?',
        a: 'Yes. There is a built-in chart that plots your net worth month by month so you can visually see your progress.',
      },
      {
        q: 'Can I track joint finances with a partner?',
        a: "Yes. Just include both partners' assets and liabilities in the same tracker for a combined household net worth.",
      },
      {
        q: 'Is my financial data private?',
        a: 'Yes. This is a local Excel file that lives on your computer or personal drive. Nothing is uploaded or shared anywhere.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4337790456/financial-net-worth-calculator-excel',
    image: '/templates/net-worth-calculator.webp',
  },
  {
    slug: 'pl-statement',
    name: 'Business Finance Template — P&L Statement',
    price: 3.59,
    originalPrice: 5.99,
    category: 'finance',
    tagline: 'Track business revenue, expenses, and profit without hiring an accountant.',
    description:
      'Understand your business finances at a glance with this Excel profit and loss statement template. Record revenue by source and expenses by category, calculate gross and net profit automatically, and compare performance month over month. A clean P&L statement you can actually understand — and share with investors or your accountant.',
    includes: [
      'Revenue tracker by income source',
      'Expense tracker by category',
      'Gross profit calculation',
      'Net profit and margin summary',
      'Monthly P&L comparison view',
      'Annual summary dashboard',
    ],
    faqs: [
      {
        q: 'Do I need accounting knowledge to use this?',
        a: 'No. Just enter your income and expenses — the template handles all calculations and organizes everything into a proper P&L format.',
      },
      {
        q: 'Can I use this to prepare for tax time?',
        a: 'It is a great starting point for organizing your business finances before meeting with a CPA. Always consult a tax professional for actual filing.',
      },
      {
        q: 'Does it work for product-based and service-based businesses?',
        a: 'Yes. The revenue and expense categories are flexible enough for any business type — retail, services, freelance, or e-commerce.',
      },
      {
        q: 'How often should I update my P&L?',
        a: 'Monthly is the standard practice and gives you the clearest picture of business trends. Some owners update weekly for tighter control.',
      },
      {
        q: 'Can I share this with my accountant or investors?',
        a: 'Yes. Export as PDF or share the Excel file directly. The formatting is clean and professional enough for external sharing.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4376794388/business-finance-template-excel',
    image: '/templates/pl-statement.jpg',
  },
  {
    slug: 'workout-tracker',
    name: 'Digital Workout Tracker',
    price: 3.59,
    originalPrice: 5.99,
    category: 'fitness',
    tagline: 'Log workouts, track PRs, and watch your strength progress over time — all in Excel.',
    description:
      'Hit your fitness goals with this Excel workout tracker. Log every exercise, set, rep, and weight. Track personal records, monitor weekly training volume, and see a progress chart that shows exactly how far you have come. No app subscription needed — just Excel and a commitment to getting stronger.',
    includes: [
      'Daily workout log (exercise, sets, reps, weight)',
      'Personal record (PR) tracker',
      'Weekly training volume calculator',
      'Cardio session log',
      'Strength progress chart',
      'Exercise library tab for quick reference',
    ],
    faqs: [
      {
        q: 'Can I add my own exercises?',
        a: 'Yes. The exercise library tab is fully customizable — add any movement, machine, or sport-specific exercise you train.',
      },
      {
        q: 'Does it track cardio as well as strength training?',
        a: 'Yes. There are separate sections for weightlifting and cardio (distance, time, pace) so you can track both in one place.',
      },
      {
        q: 'Does it calculate training volume automatically?',
        a: 'Yes. Sets × reps × weight = volume, calculated automatically for each exercise and summed for the week.',
      },
      {
        q: 'Can I track multiple fitness goals at once?',
        a: 'Yes. Set targets for strength, body weight, and cardio performance and the template tracks progress toward each goal separately.',
      },
      {
        q: 'Does this work on the Excel mobile app?',
        a: 'Yes. The Excel mobile app on iOS and Android supports this template so you can log workouts from your phone at the gym.',
      },
    ],
    etsyUrl: 'https://www.etsy.com/listing/4361915269/digital-workout-tracker-fitness',
    image: '/templates/workout-tracker.jpg',
  },
]

export const CATEGORIES = [
  { key: 'all', label: 'All Templates' },
  { key: 'hr', label: 'HR & Employee' },
  { key: 'finance', label: 'Finance' },
  { key: 'fitness', label: 'Fitness' },
] as const
