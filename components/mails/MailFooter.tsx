import { StyleSheet } from '@react-pdf/renderer';
import { MjmlColumn, MjmlSection, MjmlText } from 'mjml-react';
import { useTheme } from '@mui/material/styles';;
import i18n from 'i18next';



type Params = {
    baseUrl?: string;
    host?: string;
    settings?: any | null;
};

const MailFooter = ({ baseUrl, host, settings }: Params) => {
    i18n.setDefaultNamespace('mails')
    const t = i18n.t
    const theme = useTheme()
    const styles = StyleSheet.create({
        primary: {
            color: theme.palette.primary.dark,
            textDecoration: "none",
            fontWeight: 500
        }
    })
    return (
        <MjmlSection paddingBottom={150}>
            <MjmlColumn paddingLeft={15}>
                <MjmlText
                    padding={0}
                    fontWeight={600}
                    color={theme.palette.primary.dark}
                    lineHeight="15px"
                >
                    {'Localshop'}</MjmlText>
                <MjmlText padding={0} color={theme.palette.primary.dark} lineHeight="15px">
                    {settings?.company.address}
                </MjmlText>
                <MjmlText padding={0} color={theme.palette.primary.dark} lineHeight="15px">
                    <a href={`mailto:${'info@localshop.lt'}`} style={styles.primary}>
                        {'info@localshop.lt'}
                    </a>
                </MjmlText>
                {/* <MjmlText padding={0} color={theme.palette.primary.dark} lineHeight="15px">
                    <a href={`mailto:${'info@localshop.lt'}`} style={styles.primary}>
                        {settings?.company.phone}
                    </a>
                </MjmlText> */}
                <MjmlText padding={0} lineHeight="15px">
                    <a href={`${'http://localshop.lt'}`} style={styles.primary}>
                        {'www.localshop.lt'}
                    </a>
                </MjmlText>
            </MjmlColumn>
        </MjmlSection>
    )
}

export default MailFooter
