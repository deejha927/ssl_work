export const setLocalStorage = (data) => {
    const jsonData = { "token": data?.token, "supplierName": data?.data?.Supplier_name, "docs": data?.doc_details }
    localStorage.setItem('details', JSON.stringify(jsonData))
}
