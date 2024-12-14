// In some case we need to understand if an element is of one specific type

type Developer = {
    name: string;
    languages: string[];
};

type Tester = {
    name: string;
    tools: string[];
};

type Designer = {
    name: string;
    portfolio: string[];
};

type TeamMember = Developer | Designer | Tester | null;

function getWorkerInfo(member: TeamMember) {
    // ts doesn't know which type of member we have (Developer/Designer/Tester/null)
    // ts needs to understand the specific type

    // If we try to write member.name ts will complain as member can be null and it can't have name attribute
    if (member === null) {
        // Inside if member can be only null and ts knows it
        return null;
    }
    // Ts knows that at this point member cannot be null
    // The if with the return is a typeguard
    // Now member can be only Developer/Designer/Tester

    console.log(member.name); // Ok as Developer/Designer/Tester all have name attribute

    // If we try to read/write member.languages, member.tools or member.portfolio
    // ts will complain they are attribute defined only in some specific types

    if ('portfolio' in member) { // other typeguard
        // portfolio is defined only in Designer type, so ts knows that in this if member is a Designer
        return member.portfolio;
    }

    // After the return ts knows that here member can only be Developer or Tester
    // We can use a specific method as typeguard
    if (isTeamMemberADeveloper(member)) {
        return member.languages;
    }

    // Now the member can be just a tester
    return member.tools;
}

// This method is a typeguard
// It must return a boolean but when we declare it we should not declare the return as as simple boolean
// We should declare the return with the following syntax:
// <variable-name> is <type-we-want-to-check>
// the variable name should match with the one in parenthesis
function isTeamMemberADeveloper(teamMember: TeamMember): teamMember is Developer  {
    return !!teamMember && 'languages' in teamMember;
}

// We can have typeguard based on constant params:
type WebPage = {
    url: string,
    programType: 'web',
};

type MobileApp = {
    name: string,
    platform: 'android' | 'iOS',
    programType: 'mobile-app'
};

type App = WebPage | MobileApp;

function getAppInfo(app: App) {
    // I can use programType as it's defined in both WebPage and MobileApp
    if (app.programType === 'mobile-app') {
        // Ts knows here app is a mobile app as it's the only type with that programType value
        return app.platform;
    }

    if (app.programType === 'web') {
        return app.url;
    }
}