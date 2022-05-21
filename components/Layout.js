import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HamburgerMenu = dynamic(
  () => import('./NavMenu/HamburgerMenu'),
  { ssr: false }
)

const Layout = ({ children }) => {
    return (
        <div>
            <div className="account-section">
                <Link href="/account">
                    <a>
                        <Image 
                            src="/member_default.png" 
                            alt="Login" 
                            width={48} 
                            height={48}
                        />
                        <p className="account-status">會員登入</p>
                    </a>
                </Link>
            </div>
            <div className="company-logo">
                {/* <Image 
                    src="/sun_icon.png" 
                    alt="company_logo" 
                    width={130} 
                    height={130}
                /> */}
                <p className="company_title">EISTA.G Capital</p>
                <p>艾斯塔綠資本</p>
            </div>
            
            <HamburgerMenu />
            { children }
            <div className="footer">
                <p>艾斯塔綠資本有限公司 版權所有</p>
                <p>隱私權保護政策</p>
                <p>Copyright © 2021 EISTA.G Capital Co.,Ltd All Right Reserved.</p>
            </div>
        </div>
    );
}

export default Layout;
