import React, { useState } from 'react';
import { Edit, Mail, Phone, MapPin, User, LogOut, Shield, Calendar, Camera, CheckCircle, XCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../Hooks/UseAuth/useAuth';
import useRole from '../../Hooks/Role/useRoll';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { user, logOut } = useAuth();
    const { role } = useRole();
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [settings, setSettings] = useState({
        twoFactor: false,
        emailNotifications: true,
        smsNotifications: true
    });

    const handleLogout = async () => {
        try {
            await logOut();
            toast.success('Logged out successfully!');
            setShowLogoutModal(false);
            navigate('/login');
        } catch (error) {
            toast.error('Failed to logout. Please try again.');
            console.error('Logout error:', error);
        }
    };

    const getRoleBadgeColor = (userRole) => {
        switch (userRole?.toLowerCase()) {
            case 'admin': return 'badge-error';
            case 'manager': return 'badge-warning';
            case 'borrower': return 'badge-info';
            default: return 'badge-primary';
        }
    };

    const handleSettingToggle = (settingName) => {
        setSettings(prev => ({
            ...prev,
            [settingName]: !prev[settingName]
        }));

        const settingLabels = {
            twoFactor: 'Two-Factor Authentication',
            emailNotifications: 'Email Notifications',
            smsNotifications: 'SMS Notifications'
        };

        toast.success(
            `${settingLabels[settingName]} ${!settings[settingName] ? 'enabled' : 'disabled'}`,
            { icon: !settings[settingName] ? '✅' : '❌' }
        );
    };

    const handleChangePassword = () => {
        toast.info('Password change feature coming soon!');
        // You can implement navigation to password change page
        // navigate('/change-password');
    };

    const handleLoginHistory = () => {
        toast.info('Login history feature coming soon!');
        // You can implement navigation to login history page
        // navigate('/login-history');
    };

    const handleProfilePhotoClick = () => {
        toast.info('Photo upload feature coming soon!');
        // You can implement photo upload functionality
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-base-content">My Profile</h1>
                    <p className="text-base-content/60 mt-1">Manage your account information and settings</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 overflow-hidden">
                            {/* Cover Background */}
                            <div className="h-24 bg-gradient-to-r from-primary to-secondary relative">
                                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                    <div className="relative">
                                        <img
                                            className="w-32 h-32 rounded-full object-cover border-4 border-base-100 shadow-xl"
                                            src={user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || 'User')}&size=128&background=14B8A6&color=fff`}
                                            alt={user?.displayName || 'User'}
                                        />
                                        <button
                                            onClick={handleProfilePhotoClick}
                                            className="absolute bottom-1 right-1 bg-primary rounded-full p-2 shadow-lg cursor-pointer hover:scale-110 transition-transform"
                                        >
                                            <Camera size={16} className="text-primary-content" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="pt-20 pb-6 px-6 text-center">
                                <h2 className="text-2xl font-bold text-base-content capitalize mb-2">
                                    {user?.displayName || 'User'}
                                </h2>
                                <div className="flex justify-center mb-4">
                                    <span className={`badge ${getRoleBadgeColor(role)} badge-lg capitalize font-semibold`}>
                                        {role || 'User'}
                                    </span>
                                </div>
                                <p className="text-base-content/60 text-sm mb-6">
                                    Trusted member of LoanBee community
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3">
                                    <Link to="/update-profile" className="w-full">
                                        <button className="btn btn-primary w-full gap-2">
                                            <Edit size={18} />
                                            Edit Profile
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => setShowLogoutModal(true)}
                                        className="btn btn-outline btn-error w-full gap-2"
                                    >
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Information Card */}
                        <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-base-content">Personal Information</h3>
                                <Link to="/update-profile">
                                    <button className="btn btn-ghost btn-sm gap-2 hover:bg-primary/10">
                                        <Edit size={16} />
                                        Edit
                                    </button>
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {/* Full Name */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <User className="text-primary" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-base-content/60 mb-1">Full Name</p>
                                        <p className="font-semibold text-base-content capitalize">
                                            {user?.displayName || 'Not provided'}
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-secondary" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-base-content/60 mb-1">Email Address</p>
                                        <p className="font-semibold text-base-content break-all">
                                            {user?.email || 'Not provided'}
                                        </p>
                                        {user?.emailVerified !== undefined && (
                                            <div className="flex items-center gap-1 mt-1">
                                                {user.emailVerified ? (
                                                    <>
                                                        <CheckCircle size={14} className="text-success" />
                                                        <span className="text-xs text-success">Verified</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <XCircle size={14} className="text-warning" />
                                                        <span className="text-xs text-warning">Not verified</span>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-info" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-base-content/60 mb-1">Phone Number</p>
                                        <p className="font-semibold text-base-content">
                                            {user?.phoneNumber || 'Not provided'}
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-success" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-base-content/60 mb-1">Address</p>
                                        <p className="font-semibold text-base-content">
                                            {user?.address || 'Not provided'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Settings Card */}
                        <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6">
                            <h3 className="text-xl font-bold text-base-content mb-6">Account Settings</h3>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div>
                                        <p className="font-semibold text-base-content">Account Status</p>
                                        <p className="text-sm text-base-content/60">Your account is active and verified</p>
                                    </div>
                                    <span className="badge badge-success badge-lg">Active</span>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="flex-1">
                                        <p className="font-semibold text-base-content">Two-Factor Authentication</p>
                                        <p className="text-sm text-base-content/60">Add extra security to your account</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        checked={settings.twoFactor}
                                        onChange={() => handleSettingToggle('twoFactor')}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="flex-1">
                                        <p className="font-semibold text-base-content">Email Notifications</p>
                                        <p className="text-sm text-base-content/60">Receive updates about your loans</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        checked={settings.emailNotifications}
                                        onChange={() => handleSettingToggle('emailNotifications')}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
                                    <div className="flex-1">
                                        <p className="font-semibold text-base-content">SMS Notifications</p>
                                        <p className="text-sm text-base-content/60">Get text alerts for important updates</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        checked={settings.smsNotifications}
                                        onChange={() => handleSettingToggle('smsNotifications')}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Security Card */}
                        <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6">
                            <h3 className="text-xl font-bold text-base-content mb-6">Security</h3>

                            <div className="space-y-3">
                                <button
                                    onClick={handleChangePassword}
                                    className="w-full flex items-center justify-between p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors text-left group"
                                >
                                    <div>
                                        <p className="font-semibold text-base-content group-hover:text-primary transition-colors">
                                            Change Password
                                        </p>
                                        <p className="text-sm text-base-content/60">Update your account password</p>
                                    </div>
                                    <Shield className="text-primary" size={20} />
                                </button>

                                <button
                                    onClick={handleLoginHistory}
                                    className="w-full flex items-center justify-between p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors text-left group"
                                >
                                    <div>
                                        <p className="font-semibold text-base-content group-hover:text-primary transition-colors">
                                            Login History
                                        </p>
                                        <p className="text-sm text-base-content/60">View your recent login activity</p>
                                    </div>
                                    <Calendar className="text-primary" size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowLogoutModal(false)}
                >
                    <div
                        className="bg-base-100 rounded-2xl shadow-2xl max-w-md w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <LogOut className="text-error" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-base-content mb-2">Logout Confirmation</h3>
                            <p className="text-base-content/60">Are you sure you want to logout from your account?</p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="btn btn-outline flex-1"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className="btn btn-error flex-1"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
