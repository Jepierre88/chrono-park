enum EPermissions {
    // Usuarios
    VIEW_USERS = 1,
    CREATE_USERS = 2,
    EDIT_USERS = 3,
    DELETE_USERS = 4,
    
    // Ingresos
    VIEW_INCOMES = 5,
    CREATE_INCOMES = 6,
    EDIT_INCOMES = 7,
    DELETE_INCOMES = 8,
    
    // Transacciones
    VIEW_TRANSACTIONS = 9,
    CREATE_TRANSACTIONS = 10,
    EDIT_TRANSACTIONS = 11,
    DELETE_TRANSACTIONS = 12,
    
    // Egresos
    VIEW_OUTCOMES = 13,
    CREATE_OUTCOMES = 14,
    EDIT_OUTCOMES = 15,
    DELETE_OUTCOMES = 16,
    
    // Administración
    VIEW_ADMIN = 17,
    MANAGE_PERMISSIONS = 18,
    VIEW_REPORTS = 19,
    
    // Pagos
    VIEW_PARKING_PAYMENT = 20,
    PROCESS_PAYMENTS = 21,
}

export default EPermissions;