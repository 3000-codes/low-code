import { Navigate, Outlet } from 'react-router-dom'

// 模拟权限检查逻辑
const checkAuth = () => {
  // 这里可以替换为实际的权限检查逻辑，比如检查localStorage中的token
  // 暂时返回true表示已登录，false表示未登录
  return localStorage.getItem('authToken') !== null
}

const ProtectedRoute = () => {
  const isAuthenticated = checkAuth()

  if (!isAuthenticated) {
    // 未登录时重定向到登录页（这里暂时重定向到首页）
    // 实际项目中应该重定向到登录页
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute