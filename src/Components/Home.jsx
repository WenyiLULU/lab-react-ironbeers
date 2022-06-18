import { Link, useNavigate } from "react-router-dom";
import allBeers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { Grid, Card, Image, Text, Title, Button, Group, useMantineTheme } from '@mantine/core';

import logo from "../assets/ironbeer-logo.png"
import Header from "./Header";

const Home = () => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];

    const navigate = useNavigate()

    return ( 
        <div >
                
            <Header>Wellcome to IronBeer</Header>
            
            <div style={{ width: "70%", margin: 'auto' }}>
            <Card shadow="sm" p="lg" style={{ marginTop: 30}}>
                <Card.Section>
                <Image src={allBeers} height={250} alt="Norway" />
                </Card.Section>

                <Group position="left" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Title order={1}>Beers Gallery</Title>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ultricies elit. Nam tincidunt, tortor eget pulvinar lacinia, nibh nunc laoreet sem, et aliquet augue mi ac lectus. Nam hendrerit placerat elit non hendrerit. Sed pharetra magna sit amet leo dapibus, eget gravida dolor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est nisl.
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={()=> {navigate('/beers')}}>
                Go To The Gallery
                </Button>
            </Card>

            <Card shadow="sm" p="lg" style={{ marginTop: 30}}>
                <Card.Section>
                <Image src={randomBeer} height={200} alt="Norway" />
                </Card.Section>

                <Group position="left" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Title order={1}>Random Beer for Tonight</Title>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ultricies elit. Nam tincidunt, tortor eget pulvinar lacinia, nibh nunc laoreet sem, et aliquet augue mi ac lectus. Nam hendrerit placerat elit non hendrerit. Sed pharetra magna sit amet leo dapibus, eget gravida dolor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est nisl.
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={()=> {navigate('/random-beer')}}>
                Go Get a Random Beer
                </Button>
            </Card>
            
            <Card shadow="sm" p="lg" style={{ marginTop: 30}}>
                <Card.Section>
                <Image src={newBeer} height={200} alt="Norway" />
                </Card.Section>

                <Group position="left" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Title order={1}>New Beer Discovered</Title>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ultricies elit. Nam tincidunt, tortor eget pulvinar lacinia, nibh nunc laoreet sem, et aliquet augue mi ac lectus. Nam hendrerit placerat elit non hendrerit. Sed pharetra magna sit amet leo dapibus, eget gravida dolor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est nisl.
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={()=> {navigate('/new-beer')}}>
                Create a New Beer
                </Button>
            </Card>
            </div>
            
            
        </div>
        
     );
}
 
export default Home;