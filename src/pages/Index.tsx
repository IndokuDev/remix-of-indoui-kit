import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  Badge,
  Avatar,
  AvatarGroup,
  Input,
  Divider,
  SimpleGrid,
  Code,
  Kbd,
  Spinner,
  Skeleton,
  SkeletonCircle,
  useColorMode,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Slider,
  Progress,
  Alert,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  Tag,
  Steps,
  Step,
  Select,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "../../lib/indoui/src";
import { Sun, Moon, Zap, Package, Palette, Layout, Box as BoxIcon, Code2, ArrowRight, Check, Star, Github } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <Card variant="outline" p={6}>
    <VStack align="flex-start" spacing={4}>
      <Box
        p={3}
        rounded="lg"
        style={{ backgroundColor: 'hsl(var(--indo-primary-subtle))' }}
      >
        <Icon size={24} style={{ color: 'hsl(var(--indo-primary))' }} />
      </Box>
      <Heading as="h3" size="md">{title}</Heading>
      <Text color="muted.fg" size="sm">{description}</Text>
    </VStack>
  </Card>
);

const ComponentShowcase = () => {
  const { toggleColorMode, resolvedColorMode } = useColorMode();
  const [sliderValue, setSliderValue] = useState(50);
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const modalDisclosure = useDisclosure();
  
  return (
    <Box py={20} bg="bg.subtle">
      <Container maxWidth="xl">
        <VStack spacing={12}>
          <VStack spacing={4} style={{ textAlign: 'center' }}>
            <Badge variant="subtle" size="md">Components</Badge>
            <Heading as="h2" size="3xl">Beautiful & Composable</Heading>
            <Text color="muted.fg" size="lg" maxW="600px" style={{ textAlign: 'center' }}>
              Every component is designed with flexibility in mind. Mix and match to create stunning interfaces.
            </Text>
          </VStack>
          
          <SimpleGrid columns={2} spacing={8} w="100%">
            {/* Buttons */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Buttons</Heading>
              </CardHeader>
              <VStack spacing={4} align="flex-start">
                <HStack spacing={3}>
                  <Button variant="solid" size="md">Primary</Button>
                  <Button variant="outline" size="md">Outline</Button>
                  <Button variant="ghost" size="md">Ghost</Button>
                </HStack>
                <HStack spacing={3}>
                  <Button variant="solid" size="sm">Small</Button>
                  <Button variant="solid" size="md">Medium</Button>
                  <Button variant="solid" size="lg">Large</Button>
                </HStack>
                <HStack spacing={3}>
                  <Button variant="solid" isLoading loadingText="Loading...">Submit</Button>
                  <Button colorPalette="red">Delete</Button>
                </HStack>
              </VStack>
            </Card>
            
            {/* Form Controls */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Form Controls</Heading>
              </CardHeader>
              <VStack spacing={4} align="stretch">
                <HStack spacing={6}>
                  <Checkbox 
                    isChecked={checked} 
                    onChange={(newChecked) => setChecked(newChecked)}
                  >
                    Accept terms
                  </Checkbox>
                  <Switch 
                    isChecked={switchOn} 
                    onChange={(newChecked) => setSwitchOn(newChecked)}
                  >
                    Notifications
                  </Switch>
                </HStack>
                <RadioGroup value={radioValue} onChange={setRadioValue}>
                  <HStack spacing={4}>
                    <Radio value="option1">Option 1</Radio>
                    <Radio value="option2">Option 2</Radio>
                    <Radio value="option3">Option 3</Radio>
                  </HStack>
                </RadioGroup>
                <Select 
                  placeholder="Select framework"
                  value={selectValue}
                  onChange={setSelectValue}
                  options={[
                    { value: "react", label: "React" },
                    { value: "vue", label: "Vue" },
                    { value: "angular", label: "Angular" },
                  ]}
                />
              </VStack>
            </Card>
            
            {/* Slider & Progress */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Slider & Progress</Heading>
              </CardHeader>
              <VStack spacing={6} align="stretch">
                <Box>
                  <Text size="sm" mb={2}>Volume: {sliderValue}%</Text>
                  <Slider 
                    value={sliderValue} 
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                  />
                </Box>
                <Box>
                  <Text size="sm" mb={2}>Download Progress</Text>
                  <Progress value={75} size="md" />
                </Box>
                <Box>
                  <Text size="sm" mb={2}>Upload Progress</Text>
                  <Progress value={45} size="sm" colorPalette="success" />
                </Box>
              </VStack>
            </Card>
            
            {/* Alerts */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Alerts</Heading>
              </CardHeader>
              <VStack spacing={3} align="stretch">
                <Alert status="info" title="Information">
                  This is an informational message.
                </Alert>
                <Alert status="success" title="Success">
                  Operation completed successfully!
                </Alert>
                <Alert status="warning" title="Warning">
                  Please review your changes.
                </Alert>
                <Alert status="error" title="Error">
                  Something went wrong.
                </Alert>
              </VStack>
            </Card>
            
            {/* Tabs */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Tabs</Heading>
              </CardHeader>
              <Tabs variant="line" defaultValue="account">
                <TabList>
                  <Tab value="account">Account</Tab>
                  <Tab value="security">Security</Tab>
                  <Tab value="notifications">Notifications</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel value="account">
                    <Text size="sm" color="muted.fg">Manage your account settings and preferences.</Text>
                  </TabPanel>
                  <TabPanel value="security">
                    <Text size="sm" color="muted.fg">Configure security options and two-factor authentication.</Text>
                  </TabPanel>
                  <TabPanel value="notifications">
                    <Text size="sm" color="muted.fg">Set up email and push notification preferences.</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Card>
            
            {/* Accordion */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Accordion</Heading>
              </CardHeader>
              <Accordion allowToggle>
                <AccordionItem value="item-1">
                  <AccordionButton>
                    <Text flex={1} style={{ textAlign: 'left' }}>What is IndoUI?</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Text size="sm" color="muted.fg">
                      IndoUI is a modern React component library with Chakra-style props and global theming.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionButton>
                    <Text flex={1} style={{ textAlign: 'left' }}>How do I get started?</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Text size="sm" color="muted.fg">
                      Wrap your app with IndoUIProvider and start using components immediately.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Card>
            
            {/* Table */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Table</Heading>
              </CardHeader>
              <Table variant="simple" size="sm">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Developer</TableCell>
                    <TableCell><Badge variant="subtle" colorPalette="green">Active</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Designer</TableCell>
                    <TableCell><Badge variant="subtle" colorPalette="green">Active</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Wilson</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell><Badge variant="subtle" colorPalette="amber">Away</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            
            {/* Tags & Avatars */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Tags & Avatars</Heading>
              </CardHeader>
              <VStack spacing={6} align="flex-start">
                <HStack spacing={2}>
                  <Tag>Default</Tag>
                  <Tag colorPalette="blue">Blue</Tag>
                  <Tag colorPalette="green">Green</Tag>
                  <Tag colorPalette="amber">Amber</Tag>
                  <Tag colorPalette="red">Red</Tag>
                </HStack>
                <HStack spacing={3}>
                  <Avatar size="sm" name="John Doe" />
                  <Avatar size="md" name="Jane Smith" />
                  <Avatar size="lg" name="Bob Wilson" />
                </HStack>
                <AvatarGroup max={3} size="md">
                  <Avatar name="User 1" />
                  <Avatar name="User 2" />
                  <Avatar name="User 3" />
                  <Avatar name="User 4" />
                  <Avatar name="User 5" />
                </AvatarGroup>
              </VStack>
            </Card>
            
            {/* Steps */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Steps</Heading>
              </CardHeader>
              <Steps activeStep={1}>
                <Step title="Account" description="Create account" />
                <Step title="Profile" description="Set up profile" />
                <Step title="Complete" description="All done" />
              </Steps>
            </Card>
            
            {/* Modal & Tooltip */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Modal & Tooltip</Heading>
              </CardHeader>
              <VStack spacing={4} align="flex-start">
                <HStack spacing={4}>
                  <Tooltip label="This is a tooltip!">
                    <Button variant="outline" size="sm">Hover me</Button>
                  </Tooltip>
                  <Button variant="solid" size="sm" onClick={modalDisclosure.onOpen}>
                    Open Modal
                  </Button>
                </HStack>
                <Modal isOpen={modalDisclosure.isOpen} onClose={modalDisclosure.onClose}>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton onClick={modalDisclosure.onClose} />
                  <ModalBody>
                    <Text>This is a modal dialog. You can put any content here.</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" onClick={modalDisclosure.onClose}>Cancel</Button>
                    <Button variant="solid" onClick={modalDisclosure.onClose}>Confirm</Button>
                  </ModalFooter>
                </Modal>
              </VStack>
            </Card>
            
            {/* Loading States */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Loading States</Heading>
              </CardHeader>
              <VStack spacing={6} align="flex-start">
                <HStack spacing={4}>
                  <Spinner size="xs" />
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                </HStack>
                <Box w="100%">
                  <HStack spacing={4}>
                    <SkeletonCircle size={12} />
                    <VStack align="flex-start" flex={1}>
                      <Skeleton h={4} w="60%" />
                      <Skeleton h={3} w="40%" />
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </Card>
            
            {/* Color Mode */}
            <Card variant="elevated" p={6}>
              <CardHeader p={0} mb={6}>
                <Heading as="h4" size="sm">Color Mode</Heading>
              </CardHeader>
              <VStack spacing={4} align="flex-start">
                <Text size="sm" color="muted.fg">
                  Current mode: <Text as="span" weight="semibold">{resolvedColorMode}</Text>
                </Text>
                <Button
                  variant="outline"
                  onClick={toggleColorMode}
                  leftIcon={resolvedColorMode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                >
                  Toggle Theme
                </Button>
              </VStack>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const Index = () => {
  return (
    <Box minH="100vh">
      {/* Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={100}
        bg="bg"
        style={{ backdropFilter: 'blur(8px)', backgroundColor: 'hsl(var(--indo-bg) / 0.8)' }}
        borderBottom="1px solid"
        borderColor="border"
      >
        <Container maxWidth="xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <HStack spacing={2}>
              <Box
                p={2}
                rounded="lg"
                style={{ background: 'linear-gradient(135deg, hsl(var(--indo-primary)), hsl(var(--indo-accent)))' }}
              >
                <BoxIcon size={20} style={{ color: 'white' }} />
              </Box>
              <Heading as="h1" size="md">IndoUI</Heading>
            </HStack>
            <HStack spacing={4}>
              <Button variant="ghost" size="sm">Docs</Button>
              <Button variant="ghost" size="sm">Components</Button>
              <Button variant="ghost" size="sm">Examples</Button>
              <Button variant="outline" size="sm" leftIcon={<Github size={16} />}>
                GitHub
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
      
      {/* Hero */}
      <Box
        py={24}
        style={{
          background: 'linear-gradient(180deg, hsl(var(--indo-bg)) 0%, hsl(var(--indo-bg-subtle)) 100%)',
        }}
      >
        <Container maxWidth="xl">
          <VStack spacing={8} style={{ textAlign: 'center' }}>
            <Badge variant="outline" size="lg" px={4} py={2}>
              <HStack spacing={2}>
                <Star size={14} />
                <Text size="sm">Version 0.1.0</Text>
              </HStack>
            </Badge>
            
            <Heading
              as="h1"
              size="4xl"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--indo-fg)) 0%, hsl(var(--indo-muted-fg)) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                maxWidth: '800px',
              }}
            >
              Build beautiful React apps with{' '}
              <Text
                as="span"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--indo-primary)) 0%, hsl(var(--indo-accent)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                IndoUI
              </Text>
            </Heading>
            
            <Text
              size="xl"
              color="muted.fg"
              maxW="600px"
              style={{ lineHeight: 1.7 }}
            >
              A modern, themeable React component library with Chakra-style props, 
              global provider architecture, and zero manual CSS imports.
            </Text>
            
            <HStack spacing={4} mt={4}>
              <Button
                variant="solid"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Code2 size={18} />}
              >
                View Components
              </Button>
            </HStack>
            
            <Box
              mt={8}
              p={4}
              rounded="lg"
              bg="bg.muted"
              style={{ border: '1px solid hsl(var(--indo-border))' }}
            >
              <Code style={{ fontSize: 'var(--indo-text-sm)' }}>
                npm install @indoui/react
              </Code>
            </Box>
          </VStack>
        </Container>
      </Box>
      
      {/* Features */}
      <Box py={20}>
        <Container maxWidth="xl">
          <VStack spacing={12}>
            <VStack spacing={4} style={{ textAlign: 'center' }}>
              <Badge variant="subtle" size="md">Why IndoUI?</Badge>
              <Heading as="h2" size="3xl">Everything you need</Heading>
              <Text color="muted.fg" size="lg" maxW="600px">
                A complete design system with flexible components, powerful theming, and developer-friendly APIs.
              </Text>
            </VStack>
            
            <SimpleGrid columns={3} spacing={6} w="100%">
              <FeatureCard
                icon={Package}
                title="Provider-First"
                description="Single IndoUIProvider injects all styles. No manual CSS imports ever needed."
              />
              <FeatureCard
                icon={Palette}
                title="Themeable"
                description="CSS variables, design tokens, and color modes work out of the box."
              />
              <FeatureCard
                icon={Zap}
                title="Style Props"
                description="Chakra-compatible props like p, m, bg, color work on every component."
              />
              <FeatureCard
                icon={Layout}
                title="Composable"
                description="Build complex UIs by composing simple, focused components together."
              />
              <FeatureCard
                icon={BoxIcon}
                title="Framework Agnostic"
                description="Works with Vite, Next.js, Remix, or any React setup you prefer."
              />
              <FeatureCard
                icon={Code2}
                title="TypeScript First"
                description="Full TypeScript support with excellent autocomplete and type safety."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      
      <Divider />
      
      {/* Component Showcase */}
      <ComponentShowcase />
      
      {/* Code Example */}
      <Box py={20}>
        <Container maxWidth="xl">
          <SimpleGrid columns={2} spacing={12}>
            <VStack spacing={6} align="flex-start">
              <Badge variant="subtle" size="md">Simple API</Badge>
              <Heading as="h2" size="2xl">Write less, do more</Heading>
              <Text color="muted.fg" size="lg" style={{ lineHeight: 1.7 }}>
                No more utility class soup. Style props keep your JSX clean and readable 
                while giving you full control over every aspect of your design.
              </Text>
              <VStack spacing={3} align="flex-start">
                <HStack spacing={2}>
                  <Check size={18} style={{ color: 'hsl(var(--indo-success))' }} />
                  <Text>Chakra-style props (p, m, bg, color, etc.)</Text>
                </HStack>
                <HStack spacing={2}>
                  <Check size={18} style={{ color: 'hsl(var(--indo-success))' }} />
                  <Text>Responsive values for all props</Text>
                </HStack>
                <HStack spacing={2}>
                  <Check size={18} style={{ color: 'hsl(var(--indo-success))' }} />
                  <Text>Variant and size system</Text>
                </HStack>
                <HStack spacing={2}>
                  <Check size={18} style={{ color: 'hsl(var(--indo-success))' }} />
                  <Text>Full TypeScript autocomplete</Text>
                </HStack>
              </VStack>
            </VStack>
            
            <Card variant="elevated" p={0} overflow="hidden">
              <Box
                p={4}
                bg="bg.muted"
                borderBottom="1px solid"
                borderColor="border"
              >
                <HStack spacing={2}>
                  <Box boxSize={3} rounded="full" bg="destructive" />
                  <Box boxSize={3} rounded="full" bg="warning" />
                  <Box boxSize={3} rounded="full" bg="success" />
                </HStack>
              </Box>
              <Box p={6} style={{ fontFamily: 'var(--indo-font-mono)', fontSize: 'var(--indo-text-sm)' }}>
                <Text as="span" color="muted.fg">{'// Just wrap your app once'}</Text>
                <br />
                <Text as="span" style={{ color: 'hsl(var(--indo-primary))' }}>{'<IndoUIProvider>'}</Text>
                <br />
                <Text as="span" style={{ color: 'hsl(var(--indo-accent))' }}>{'  <App />'}</Text>
                <br />
                <Text as="span" style={{ color: 'hsl(var(--indo-primary))' }}>{'</IndoUIProvider>'}</Text>
                <br /><br />
                <Text as="span" color="muted.fg">{'// Then use components anywhere'}</Text>
                <br />
                <Text as="span" style={{ color: 'hsl(var(--indo-primary))' }}>{'<Button'}</Text>
                <br />
                <Text as="span">{`  variant=`}</Text>
                <Text as="span" style={{ color: 'hsl(var(--indo-success))' }}>{`"solid"`}</Text>
                <br />
                <Text as="span">{`  size=`}</Text>
                <Text as="span" style={{ color: 'hsl(var(--indo-success))' }}>{`"lg"`}</Text>
                <br />
                <Text as="span">{`  px={8}`}</Text>
                <br />
                <Text as="span">{`  shadow=`}</Text>
                <Text as="span" style={{ color: 'hsl(var(--indo-success))' }}>{`"md"`}</Text>
                <br />
                <Text as="span" style={{ color: 'hsl(var(--indo-primary))' }}>{'>'}</Text>
                <br />
                <Text as="span">{`  Click me`}</Text>
                <br />
                <Text as="span" style={{ color: 'hsl(var(--indo-primary))' }}>{'</Button>'}</Text>
              </Box>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* CTA */}
      <Box py={20} bg="bg.subtle">
        <Container maxWidth="lg">
          <Card
            variant="elevated"
            p={12}
            style={{
              background: 'linear-gradient(135deg, hsl(var(--indo-primary-subtle)) 0%, hsl(var(--indo-bg)) 100%)',
              border: '1px solid hsl(var(--indo-primary) / 0.2)',
            }}
          >
            <VStack spacing={6} style={{ textAlign: 'center' }}>
              <Heading as="h2" size="2xl">Ready to build?</Heading>
              <Text color="muted.fg" size="lg" maxW="500px">
                Start creating beautiful React applications with IndoUI today. 
                It's free, open source, and designed for developers.
              </Text>
              <HStack spacing={4}>
                <Button variant="solid" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Get Started
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Github size={16} />}>
                  View on GitHub
                </Button>
              </HStack>
            </VStack>
          </Card>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box py={8} borderTop="1px solid" borderColor="border">
        <Container maxWidth="xl">
          <Flex justifyContent="space-between" alignItems="center">
            <HStack spacing={2}>
              <Box
                p={1.5}
                rounded="md"
                style={{ background: 'linear-gradient(135deg, hsl(var(--indo-primary)), hsl(var(--indo-accent)))' }}
              >
                <BoxIcon size={14} style={{ color: 'white' }} />
              </Box>
              <Text size="sm" color="muted.fg">IndoUI © 2024</Text>
            </HStack>
            <HStack spacing={6}>
              <Text size="sm" color="muted.fg" style={{ cursor: 'pointer' }}>Documentation</Text>
              <Text size="sm" color="muted.fg" style={{ cursor: 'pointer' }}>GitHub</Text>
              <Text size="sm" color="muted.fg" style={{ cursor: 'pointer' }}>Twitter</Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
