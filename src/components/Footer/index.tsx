import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'zora同学倾情出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'qqEmail',
          title: '邮箱',
          href: 'https://wx.mail.qq.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Zora GitHub</>,
          href: 'https://github.com/Zora178/',
          blankTarget: true,
        },
        {
          key: 'dataAll',
          title: '语雀·知识库',
          href: 'https://www.yuque.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
