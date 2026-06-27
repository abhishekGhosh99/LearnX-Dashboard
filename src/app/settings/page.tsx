import AccountSettings from "./AccountSettings";
import PreferencesSettings from "./PreferencesSettings";
import ProfileSettings from "./ProfileSettings";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Settings</h1>

      <ProfileSettings />

      <PreferencesSettings />

      <AccountSettings />
    </div>
  );
};

export default SettingsPage;
