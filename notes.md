### generete standlone android apk
    1. exp build:android  : it's slowly;  u can see install state by run `exp build:status` , when it's installed 
    it will genereate apk url looks like:
     APK:https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40penglyu%2Fcodinner-5abdf7e9-772d-11e7-b7f7-0a580a781a60-signed.apk

    2. Download Genymotion (free version) and follow the Genymotion installation guide. Once you’ve installed Genymotion, create a virtual device - we recommend a Nexus 5, the Android version is up to you. Start up the virtual device when it’s ready.
         it need VPN to download AVD

    3. Download `Exo Client App` from Intenert, becase the official recommend install from Google Play , which is not used in China , so search from Internet, [here](https://apkpure.com/expo/host.exp.exponent/download?from=details)

    4. [snack expo io](https://snack.expo.io/)


    xde
    =========
     1. Build XDE from [Source Code](https://github.com/expo/xde)
     2. enter the source code floder: `/home/evanlyu/Work/SourceCode/xde` 
     3. run `yarn start`

     Genymotion (need VPN)
     ===========
     1. install Genymotion (free version) 
     2. prepare: Virtual Box
     3. enter folder `~/Software/genymotion` and run `./genymotion`
     4. add virtual device(vpn) : Nexus 5

     Linux command 
     =============
     1. `df -h` : view usage of disk
     2. `top` : view  


     RN101-notes
     ============
     1. Views component
     
     2. *Style* : defining styles using JavaScript:
     	- all of core components accept `style` prop
	- style names are written using camel casing, e.g backGroundColor rather than background-color
	- style prop can be a plain js object. e.g `<Text style={{textAlignVertical:'center'}}>Hello</Text>` or also can pass array of styles , e.g `<Text style={ [styles.bigRed, styles.bigBlue] }>RN</Text>` , which the last style in the array has precedence
	- As component grows in complexity , using `StyleSheet.create` to define serveral styles in one place is cleaner
	- 'flex: 1', which tells a component to fill all avaliable space
	

	3. *State* :
     	- ```js
	   render() {
	   	   let display = this.state.showText? this.props.text : ' '
	  	    return (
		               <Text>{display}</Text>
	  		    )
	    }
	  ````
	4. *Layout* : `flexDirection`, `alignItems`, `justifyContent`

     Awesome Resource
     ============
     1. color : aquamarine, powderblue
     