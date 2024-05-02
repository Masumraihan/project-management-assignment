import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#e75704",
            colorBorderBg: "#ebe4d1",
          },
          components: {
            Button: {
              colorPrimary: "#e75704",
              colorText: "#e75704",
              textHoverBg: "#ebe4d1",
              colorBgTextHover: "#ffffff",
              borderRadius: 4,
            },
          },
          inherit: true,
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default ThemeProvider;
