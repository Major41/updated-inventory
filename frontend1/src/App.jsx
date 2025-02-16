import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterPage from './Pages/Auth/Register/Register';
import LoginPage from './Pages/Auth/Login/Login';
import ForgotPassword from './Pages/Auth/ForgetPassword/ForgetPassword';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard';
import UserDashboard from './Pages/Dashboards/UserDashBoard/UserDashboard';
import Welcome from './Components/UserComponents/Welcome';
import BorrowedItems from './Components/UserComponents/BorrowedItems';
import EquipmentChart from './Components/AdminComponents/EquipmentChart';
import StudentsList from './Components/AdminComponents/GetStudents';
import AccountDetails from './Components/AccountDetails/AccountDetails';
import AddItem from './Components/AdminComponents/AddItemForm';
import LabSelection from './Components/Labs/StaffLabs';
import Layout from './Components/Labs/Layout';
import LabAStorage from './Components/Labs/labAStaff';
import LabBStorage from './Components/Labs/LabB';
import SectionSetup from './Components/Labs/SectionSetup';
import Shelves from './Components/Labs/Shelves';
import Trolley from './Components/Labs/Trolley';
import Components from './Components/Labs/Components';
import BorrowForm from './Components/UserComponents/BorrowForm';
import Bars from './Components/Labs/Bars';
import LabAStudent from './Components/Labs/LabAStudent';
import StudentLabs from './Components/Labs/StudentLabs';
import ProtectedRoute from './AuthContext/ProtectedRoute';
import { AuthProvider } from './AuthContext/AuthContext';
import AllBorrowedItems from './Components/AdminComponents/AllBorrowedItems';
import ItemList from './Components/UserComponents/Items';
import Items from './Components/AdminComponents/Items';
function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/" element={<ResetPassword />} />

        {/* Admin Dashboard */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="/Staff/*" element={<AdminDashboard />}>
            <Route path="" element={<EquipmentChart />} />
            <Route path="borrowed" element={<AllBorrowedItems />} />
            <Route path="labs" element={<Layout />} />
            <Route path="items" element={<Items />} />
            <Route path="students" element={<StudentsList />} />
            <Route path="profile" element={<AccountDetails />} />
            <Route path="addItem" element={<AddItem />} />
          </Route>

          {/* User Dashboard with nested routes */}
          <Route path="/Staff/labs/*" element={<Layout />}>
            <Route path="" element={<LabSelection />} />
            <Route path="labA" element={<LabAStorage />} />
            <Route path="labB" element={<LabBStorage />} />
            <Route path="labA/door2" element={<SectionSetup />} />
            <Route path="labA/door2" element={<SectionSetup />} />
            <Route path="labA/shelf" element={<Shelves />} />
            <Route path="labA/trolley" element={<Trolley />} />
            <Route path="labA/components" element={<Components />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute role="user" />}>
          <Route path="/Student/*" element={<UserDashboard />}>
            <Route path="" element={<Welcome />} />
            <Route path="borrowed" element={<BorrowedItems />} />
            <Route path="labs" element={<Layout />} />
            <Route path="search" element={<ItemList />} />
            <Route path="profile" element={<AccountDetails />} />
            <Route path="borrowed/borrow" element={<BorrowForm />} />
            <Route path="search/borrowed/borrow" element={<BorrowForm />} />
          </Route>

          <Route path="/Student/labs/*" element={<Layout />}>
            <Route path="" element={<StudentLabs />} />
            <Route path="labA" element={<LabAStudent />} />
            <Route path="labB" element={<LabBStorage />} />
            <Route path="labB/bars" element={<Bars />} />
            <Route path="labA/door2" element={<SectionSetup />} />
            <Route path="labA/door2" element={<SectionSetup />} />
            <Route path="labA/shelf" element={<Shelves />} />
            <Route path="labA/trolley" element={<Trolley />} />
            <Route path="labA/components" element={<Components />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
