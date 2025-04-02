# trial-structure

## Folder Structure Example using normal React language
/Folder-Project
│── HOCs/                  # Higher-Order Components
│── public/                # Static assets like images, icons, fonts
│── pages/                 # Next.js Page Router structure
│   ├── [locale]/          # Localization supported pages
│   │   ├── (auth)/        # Authentication pages (login, register, etc.)
│   │   │   ├── login/     # Login-related page
│   │   │   ├── register/  # Register-related page
│   │   ├── dashboard/     # Dashboard-related pages
│   ├── _app.tsx           # Custom App component for global configuration
│   ├── _document.tsx      # Custom Document component for modifying the HTML structure
│   ├── index.tsx          # Homepage entry point
│── service/               # Services or API-related code
│   ├── @common/           # Shared API handler hooks
│   ├── dashboard/         # Dashboard-specific services (e.g., API calls)
|   ├── ApiEndpoints.ts    # List of all API Endpoints
│── src/                   # Main source code
│   ├── @common/           # Shared modules across the project
│   │   ├── components/    # Reusable UI components (buttons, modals, inputs, etc.)
│   │   ├── constants/     # Application-wide constants (e.g., config variables)
│   │   ├── api-hooks/     # Hooks for fetching common data using React Query (queries, mutations, adapters)
│   │   ├── hooks/         # Shared Custom React hooks (e.g., useAuth, useLocalStorage)
│   │   ├── containers/    # Higher-level container components
│   │   ├── contexts/      # React context providers 
│   │   ├── schema/        # Data validation schemas 
│   │   ├── utils/         # Utility functions (e.g., formatters, helper functions)
│   ├── dashboard/         # Dashboard-related components and logic
│   │   ├── __mocks__/     # Mock data for testing purposes
│   │   ├── __tests__/     # Unit and integration tests
│   │   ├── components/    # Dashboard-specific UI components
│   │   ├── containers/    # Dashboard container components
│   │   ├── constants/     # Constants used in the dashboard module
│   │   ├── api-hooks/     # API hooks specific to dashboard data (queries, mutations, adapters)
│   │   ├── hooks/         # Custom hooks related to dashboard functionality
│   │   ├── contexts/      # Context providers specific to dashboard
│   │   ├── schema/        # Validation schemas related to dashboard
│   │   ├── utils/         # Utility functions for dashboard-related logic
├── types/                 # Types definitions (considering putting it global because of service)
│   ├── @common/           # Shared type definitions (e.g., global types, enums)
│   ├── dashboard/         # Dashboard-specific type definitions
│── .env.local             # Environment variables 
│── .eslintrc.js           # ESLint configuration file
│── .prettierrc            # Prettier configuration file
│── next.config.js         # Next.js configuration file
│── tsconfig.json          # TypeScript configuration file
│── package.json           # Dependencies and project scripts
│── README.md              # Documentation for the project


## Folder Structure Example using Common Language
/Folder-Project
│── assets/                # Static assets like images, icons, fonts
│── pages/                 # Next.js Page Router structure
│   ├── [locale]/          # Localization supported pages
│   │   ├── auth/          # Authentication pages (login, register, etc.)
│   │   │   ├── login/     # Login page
│   │   │   ├── register/  # Register page
│   │   ├── dashboard/     # Dashboard-related pages
│   ├── _app.tsx           # Custom App component for global configuration
│   ├── _document.tsx      # Custom Document component for modifying the HTML structure
│   ├── index.tsx          # Homepage entry point
│── features/              # Core features/modules of the application foldering based on pages
│   ├── auth/              # Authentication-related components and logic
│   │   ├── login/         # Login-related components and logic
│   │   │   ├── __mocks__/     # Mock data for testing purposes
│   │   │   ├── __tests__/     # Unit and integration tests
│   │   │   ├── components/    # Login-specific UI components
│   │   │   ├── constants/     # Constants used within the login feature
│   │   │   ├── data/          # Data-fetching hooks logic for login (queries, mutations, adapters)
│   │   │   ├── hooks/         # Custom hooks for login-related logic
│   │   │   ├── providers/     # Context providers for login state
│   │   │   ├── validations/   # Validation schemas related to the login feature
│   │   │   ├── utils/         # Utility functions for login-related logic
│   │   │   ├── index.tsx      # Login container component (is called directly from Pages folder)
│   │   ├── register/         # Structured the same as login
│   │   ├── shared/         # Shared modules in auth folder
│   ├── dashboard/         # Dashboard-related components and logic (structured the same as Login component)
│── shared/                # Shared modules across the project
│   ├── components/        # Reusable UI components (buttons, modals, inputs, etc.)
│   ├── constants/         # Application-wide constants (e.g., config variables)
│   ├── data/              # Data-fetching hooks using React Query for shared logic (queries, mutations, adapters)
│   ├── hooks/             # Custom hooks for common functionality
│   ├── providers/         # Shared context providers
│   ├── validations/       # Global data validation schemas
│   ├── utils/             # Utility functions (e.g., formatters, helpers)
│── services/              # API-related logic (fetching data, interacting with backends)
│   ├── @shared/           # Shared API handlers or utility functions
│   ├── dashboard/         # Dashboard-specific API services (e.g., fetch dashboard data)
│   ├── ApiEndpoints.ts    # List of all API endpoints
├── types/                 # Types definitions (considering putting it global because of service)
│   ├── @shared/           # Shared type definitions (e.g., global types, enums)
│   ├── dashboard/         # Dashboard-specific type definitions
│── .env.local             # Environment variables
│── .eslintrc.js           # ESLint configuration
│── .prettierrc            # Prettier configuration
│── next.config.js         # Next.js configuration
│── tsconfig.json          # TypeScript configuration
│── package.json           # Project dependencies and scripts
│── README.md              # Project documentation

## Specific Behavior Notes
### Organizing Components for Single and Multi-Page Features
│── features/              # Core features/modules of the application foldering based on pages
│   ├── auth/              # Multiple pages component folder
│   │   ├── login/         # Login-related components and logic
│   │   │   ├── __mocks__/     # Mock data for testing purposes
│   │   │   ├── __tests__/     # Unit and integration tests
│   │   │   ├── components/    # Login-specific UI components
│   │   │   ├── constants/     # Constants used within the login feature
│   │   │   ├── data/          # Data-fetching hooks logic for login (queries, mutations, adapters)
│   │   │   ├── hooks/         # Custom hooks for login-related logic
│   │   │   ├── providers/     # Context providers for login state
│   │   │   ├── validations/   # Validation schemas related to the login feature
│   │   │   ├── utils/         # Utility functions for login-related logic
│   │   │   ├── index.tsx      # Login container component (is called directly from Pages folder)
│   │   ├── register/         # Structured the same as login
│   │   ├── shared/         # Shared modules in auth folder
│   ├── dashboard/         # Singular page component folder
│   │   ├── __mocks__/     # Mock data for testing purposes
│   │   ├── __tests__/     # Unit and integration tests
│   │   ├── components/    # Dashboard-specific UI components
│   │   ├── constants/     # Constants used within the dashboard feature
│   │   ├── data/          # Data-fetching hooks logic for dashboard (queries, mutations, adapters)
│   │   ├── hooks/         # Custom hooks for dashboard-related logic
│   │   ├── providers/     # Context providers for dashboard state
│   │   ├── validations/   # Validation schemas related to the dashboard feature
│   │   ├── utils/         # Utility functions for dashboard-related logic
│   │   ├── index.tsx      # Dashboard container component (is called directly from Pages folder)


### Managing Constants for Single vs. Multiple Use Cases
│   │   │   ├── constants/              # Used as a folder when multiple related constants exist
│   │   │   │   ├── ExampleConstant.ts  # Example of a feature-specific constant file
│   │   │   ├── constants.ts            # Used as a single file when constants are minimal