import { extendedGalaxy } from 'app/descriptor-languages/Galaxy';
import { extendedNFL } from 'app/descriptor-languages/Nextflow';
import { extendedService } from 'app/descriptor-languages/Service';
import { extendedWDL } from 'app/descriptor-languages/WDL';
import { DescriptorLanguageBean, SourceFile, ToolDescriptor, Workflow } from 'app/shared/swagger';
import { extendedCWL } from '../descriptor-languages/CWL';

/**
 * The idea is that this file serves as a collection of language plugins.
 * Each ExtendedDescriptorLanguageBean is a plugin of sorts.
 * Ideally, there would be no code in the project that specifically references a certain language (e.x. if it's Galaxy, do this)
 * since this file (and the "plugin" files that it imports in descriptor-languages) would specify what to do in certain situations
 * TODO: Use the value property to map the DescriptorLanguageBean to this
 */
export interface ExtendedDescriptorLanguageBean extends DescriptorLanguageBean {
  shortFriendlyName: string;
  defaultDescriptorPath: string;
  descriptorPathPattern: string;
  descriptorPathPlaceholder: string;
  toolDescriptorEnum: ToolDescriptor.TypeEnum;
  workflowDescriptorEnum: Workflow.DescriptorTypeEnum;
  plainTRS: string;
  descriptorFileTypes: SourceFile.TypeEnum[];
  toolTab: {
    // Example: If rowIdentifier is "tool ID", then the the first column of each row will say something like "tool ID: hello-world"
    rowIdentifier: string;
    // This is the header that goes in the second column of the tool tab table (Example: Tool Excerpt)
    workflowStepHeader: string;
  };
  workflowLaunchSupport: boolean;
  testParameterFileType: SourceFile.TypeEnum;
  fileTabs: Array<{ tabName: string; fileTypes: Array<SourceFile.TypeEnum> }>;
}

export const extendedUnknownDescriptor: ExtendedDescriptorLanguageBean = {
  value: null,
  shortFriendlyName: null,
  friendlyName: null,
  defaultDescriptorPath: null,
  descriptorPathPattern: '.*',
  descriptorPathPlaceholder: '',
  toolDescriptorEnum: null,
  workflowDescriptorEnum: null,
  plainTRS: null,
  descriptorFileTypes: [],
  toolTab: {
    rowIdentifier: 'tool\xa0ID',
    workflowStepHeader: 'Tool Excerpt',
  },
  workflowLaunchSupport: false,
  testParameterFileType: null,
  fileTabs: [],
};

// To add a language, create a file in the descriptor-languages directory that is an ExtendedDescriptorLanguageBean
export const extendedDescriptorLanguages: ExtendedDescriptorLanguageBean[] = [
  extendedCWL,
  extendedWDL,
  extendedNFL,
  extendedService,
  extendedGalaxy,
];
