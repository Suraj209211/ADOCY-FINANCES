import HeaderBox from '@/components/HeaderBox';
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  try {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) {
      // Handle the case where the user is not logged in
      return <div>Please log in to view your accounts.</div>;
    }

    const accounts = await getAccounts({ userId: loggedIn.$id });

    if (!accounts) {
      // Handle the case where no accounts are found
      return <div>No accounts found for the logged-in user.</div>;
    }

    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

    const account = await getAccount({ appwriteItemId });

    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />

            <TotalBalanceBox
              accounts={accountsData}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />
          </header>

          <RecentTransactions
            accounts={accountsData}
            transactions={account?.transactions}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          />
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={account?.transactions}
          banks={accountsData?.slice(0, 2)}
        />
      </section>
    );
  } catch (error) {
    // Handle any unexpected errors
    console.error('An error occurred:', error);
    return <div>An error occurred while fetching the data.</div>;
  }
};

export default Home;
