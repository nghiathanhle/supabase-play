import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  console.log('about to call sign in');
  signIn();
  console.log('called sign in');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

// const makeCalltoTestTwilio = () => {

// }
const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://zdjcnvnmwsttcoeabufp.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkamNudm5td3N0dGNvZWFidWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzOTUzNjUsImV4cCI6MjAyMTk3MTM2NX0.du7DcbcOP8kIkE6Uu_qz6Fplijfjz6y_yrjDCAuL0go');
const signIn =async () => {
  let { error } = await supabase.auth.signInWithOtp(
    { phone: '+14046452587'}
  );

  if(error){
    console.log(error);
    return;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
